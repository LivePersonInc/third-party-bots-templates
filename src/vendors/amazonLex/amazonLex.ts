import { cwd } from 'process';
import intentConfig from '../intentConfig.json';
import skillTemplate from './templates/skill.json';
import intentTemplate from './templates/intent.json';

import {
    buildRichContent,
    createZipFile,
    deepcopy,
    determineMessages,
    filterVendorSpecificRichContent,
    getFileNameFromPath,
    getFilesFromDirectory,
    hasRelatedMetadataFile,
    isNotEmptyArray,
    isVendorAction,
    requireFile,
    StructuredContent,
    VENDORS,
} from '../../utils';
import { LogFactory } from '../../logger';

const logger = new LogFactory(VENDORS.Lex).build();

type Message = {
    groupNumber: number;
    contentType: string;
    content: string;
};

type Intent = {
    name: string;
    version: string;
    fulfillmentActivity: {
        type: string;
    };
    sampleUtterances: Array<string>;
    slots: Array<unknown>;
    conclusionStatement: {
        messages: Array<Message>;
    };
};

export type AmazonLex = {
    metadata: {
        schemaVersion: string;
        importType: string;
        importFormat: string;
    };
    resource: {
        name: string;
        version: string;
        intents: Array<Intent>;
        voiceId: string;
        childDirected: boolean;
        locale: string;
        idleSessionTTLInSeconds: number;
        clarificationPrompt: unknown;
        abortStatement: unknown;
        detectSentiment: boolean;
        enableModelImprovements: boolean;
    };
};

/**
 * Builds the payload by the provided file path
 * @param {string} filePath
 * @param {boolean} [usesMetadata=false]
 * @returns {string}
 */
function buildPayload(filePath: string, usesMetadata: boolean): string {
    let payload: StructuredContent;
    const fileContent = requireFile(`${filePath}`);
    const fileName = getFileNameFromPath(filePath);
    if (isVendorAction(fileContent)) {
        payload = fileContent;
    } else {
        payload = buildRichContent(fileContent, fileName, filePath, usesMetadata);
    }
    return JSON.stringify(payload);
}

/**
 * Iterates through the intentConfig and builds each intent and utterance
 * 1. Copy the skill template
 * 2. Iterates over intent config
 * 3. Copy the intent template
 * 4. Parse rich content to intent template
 * 5. Add utterances to intent template
 * 6. Add intent template to skill template
 * @returns {Promise<AmazonLex>}
 */
async function buildSkillWithIntentsAndUtterances(): Promise<AmazonLex> {
    let files = await getFilesFromDirectory(`${cwd()}/files/richContent`);
    files = filterVendorSpecificRichContent(files, VENDORS.Lex);
    const skill = deepcopy(skillTemplate) as AmazonLex;
    intentConfig.forEach((config) => {
        const intent = deepcopy(intentTemplate) as Intent;
        const messages = determineMessages(config, VENDORS.Lex);
        let preparedConfig: Message[];
        if (isNotEmptyArray(messages)) {
            preparedConfig = messages.map((e, index) => {
                const messageObject = { groupNumber: index + 1, ...e };
                if (e.contentType === 'CustomPayload') {
                    const richContentPath = files.find((path) => path.includes(e.content));
                    messageObject.content = buildPayload(richContentPath, hasRelatedMetadataFile(files, richContentPath));
                }
                return messageObject;
            });
            intent.name = config.intent;
            intent.conclusionStatement.messages = preparedConfig;
            intent.sampleUtterances = config.utterance;
            skill.resource.intents.push(intent);
        }
    });
    return skill;
}

/**
 * Creates the amazon lex zip file in the export folder
 * The zip file contains one json file
 * @export
 * @returns {Promise<void>}
 */
export async function buildLexZipFile(): Promise<void> {
    logger.info(`Started zip file`);
    const fileName = 'AmazonLexTemplates';
    const content = await buildSkillWithIntentsAndUtterances();
    await createZipFile(fileName, [{ fileName: `${fileName}.json`, content }]);
    logger.info(`Created zip file`);
}
