import { cwd } from 'process';
import { v4 as uuidv4 } from 'uuid';
import {
    buildRichContent,
    createZipFile,
    deepcopy,
    determineMessages,
    filterVendorSpecificRichContent,
    getFileNameFromPath,
    getFilesFromDirectory,
    hasRelatedMetadataFile,
    IntentConfigItem,
    isNotEmptyArray,
    isVendorAction,
    requireFile,
    VENDORS,
    ZipContent,
} from '../../utils';

import intentConfig from '../intentConfig.json';
import intentTemplate from './templates/intent.json';
import utteranceTemplate from './templates/utterance.json';
import utteranceItemTemplate from './templates/utteranceItem.json';
import parameterTemplate from './templates/parameter.json';
import payloadTemplate from './templates/payload.json';
import messageTemplate from './templates/message.json';
import { LogFactory } from '../../logger';

const logger = new LogFactory(VENDORS.DialogflowES).build();

type UtteranceItem = {
    text: string;
    userDefined: boolean;
};

type Utterance = {
    id: string;
    data: UtteranceItem[];
    isTemplate: boolean;
    count: number;
    lang: string;
    update: number;
};

type Parameter = {
    id: string;
    name: string;
    required: boolean;
    dataType: string;
    value: string;
    defaultValue: string;
    isList: boolean;
    prompts: unknown[];
    promptMessages: unknown[];
    noMatchPromptMessages: unknown[];
    noInputPromptMessages: unknown[];
    outputDialogContexts: unknown[];
};

type Message = {
    type: string;
    title: string;
    textToSpeech: string;
    lang: string;
    speech: unknown[];
    condition: string;
};

type Payload = {
    type: string;
    title: string;
    payload: unknown;
    textToSpeech: string;
    lang: string;
    condition: string;
};

type Intent = {
    id: string;
    name: string;
    auto: boolean;
    contexts: unknown[];
    responses: [
        {
            resetContexts: boolean;
            action: string;
            affectedContexts: unknown[];
            parameters: Parameter[];
            messages: Message[] & Payload[];
            speech: unknown[];
        }
    ];
    priority: number;
    webhookUsed: boolean;
    webhookForSlotFilling: boolean;
    fallbackIntent: boolean;
    events: unknown[];
    conditionalResponses: unknown[];
    condition: string;
    conditionalFollowupEvents: unknown[];
    utterances: unknown[];
};

/**
 * Builds the utterance array for an intent
 * @param intent
 * @return {Utterance[]}
 */
function buildUtterances(intent): Utterance[] {
    const utterances = [];
    intent.utterance.forEach((utterance: string) => {
        const template = deepcopy(utteranceTemplate) as Utterance;
        template.id = uuidv4();
        const item = deepcopy(utteranceItemTemplate) as UtteranceItem;
        item.text = utterance;
        template.data.push(item);
        utterances.push(template);
    });
    return utterances;
}

/**
 * Builds the parameter for an intent
 * @param fileContent
 * @return {Parameter[]}
 */
function buildParameters(fileContent: IntentConfigItem): Parameter[] {
    return Object.keys(fileContent)
        .filter((e) => e !== 'action')
        .map((parameter) => {
            const template = deepcopy(parameterTemplate) as Parameter;
            template.id = uuidv4();
            template.name = parameter;
            template.value = fileContent[parameter];
            return template;
        });
}

/**
 * Builds the payload by the provided file path
 * @param {Intent} intent
 * @param {string} filePath
 * @param {boolean} usesMetadata
 * @returns {Payload}
 */
function buildPayload(intent: Intent, filePath: string, usesMetadata: boolean): Intent {
    const fileContent = requireFile(filePath);
    const fileName = getFileNameFromPath(filePath);
    if (isVendorAction(fileContent)) {
        if (['agentTransfer', 'skillTransfer', 'invokeFunction', 'endConversation'].includes(intent.name)) {
            intent.responses[0].parameters = buildParameters(fileContent);
            intent.responses[0].action = fileContent.action;
        } else if (['delayPauseConversation', 'privateMessage', 'encodedMetadata'].includes(intent.name)) {
            const payload = deepcopy(payloadTemplate) as Payload;
            payload.payload = fileContent;
            intent.responses[0].messages.push(payload);
        }
    } else {
        const payload = deepcopy(payloadTemplate) as Payload;
        payload.payload = buildRichContent(fileContent, fileName, filePath, usesMetadata);
        intent.responses[0].messages.push(payload);
    }
    return intent;
}

/**
 * Creates for each channel a json file with the related rich content
 * All will be bundled in one zip file in the export folder
 * One intent contains a json with the payload and one with the utterances (xyz_usersays_en.json)
 * @export
 * @returns {Promise<void>}
 */
export function createZipfileForIntent(payload: Intent): Array<ZipContent> {
    const { utterances, ...rest } = payload;
    return [
        {
            fileName: `intents/${payload.name}_usersays_en.json`,
            content: utterances,
        },
        { fileName: `intents/${payload.name}.json`, content: rest },
    ];
}

/**
 * Iterates through the intentConfig and builds the related lambda payloads
 * 1. Iterates over intent config
 * 2. Copy intent template
 * 3. Add utterances to intent template
 * 4. Parse rich content to intent template
 * 5. Add the intent to the zip files
 * 6. Create zip file with all intent zip files
 * @returns {Promise<Array<Payload>>}
 */
export async function buildDialogflowESZipFile(): Promise<void> {
    logger.info(`Started zip file`);
    let files = await getFilesFromDirectory(`${cwd()}/files/richContent`);
    files = filterVendorSpecificRichContent(files, VENDORS.DialogflowES);
    let zipFiles = [];
    const localFiles = `${cwd()}/files/botTemplates/Dialogflow_ES/`;
    intentConfig.forEach((config) => {
        let intent = deepcopy(intentTemplate) as Intent;
        intent.name = config.intent;
        intent.id = uuidv4();
        intent.utterances = buildUtterances(config);
        const messages = determineMessages(config, VENDORS.DialogflowES);
        if (isNotEmptyArray(messages)) {
            messages.forEach((e: { contentType: string; content: string }) => {
                if (e.contentType === 'CustomPayload') {
                    const richContentPath = files.find((path: string | string[]) => path.includes(e.content));
                    intent = buildPayload(intent, richContentPath, hasRelatedMetadataFile(files, richContentPath));
                } else {
                    const textMessage = deepcopy(messageTemplate) as Message;
                    textMessage.speech = [e.content];
                    intent.responses[0].messages.push(textMessage);
                }
            });
            zipFiles = zipFiles.concat(...createZipfileForIntent(intent));
        }
    });
    await createZipFile('DialogflowES', zipFiles, localFiles);
    logger.info(`Created zip file`);
}
