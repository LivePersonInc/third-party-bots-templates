import { cwd } from 'process';
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
} from '../../../utils';
import intentConfig from '../../intentConfig.json';
import { LogFactory } from '../../../logger';
import mainDialogTemplate from './templates/mainDialogTemplate.json';

// Use the vendor BotFramework instead of Composer as they have the same rich content/vendor action structure
const localVendor = VENDORS.BotFramework;

type Payload = { text: string; channelData: unknown };

const logger = new LogFactory(VENDORS.Composer).build();

let languageGenerationFile = `[import](common.lg)

# SendActivity_7hrBzd()
[Activity
    Text = \${SendActivity_7hrBzd_text()}
]

# SendActivity_7hrBzd_text()
- Sorry, I couldn't find anything. Please rephrase it.
`;

type Intent = {
    intent: string;
    pattern: string;
};

type Action = {
    $kind: string;
    activity: string;
};

type Trigger = {
    $kind: string;
    $designer?: unknown;
    condition?: string;
    intent?: string;
    actions: Action[];
};

type MainDialog = {
    $kind: string;
    $designer: {
        name: string;
        description: string;
        id: string;
    };
    autoEndDialog: boolean;
    defaultResultProperty: string;
    triggers: Trigger[];
    generator: string;
    id: string;
    recognizer: {
        $kind: string;
        intents: Intent[];
    };
};

/**
 * Builds the payload by the provided file path
 * @param {string} filePath
 * @param {boolean} usesMetadata
 * @returns {Payload}
 */
function buildPayload(filePath: string, usesMetadata: boolean): Payload {
    const fileContent = requireFile(filePath);
    const fileName = getFileNameFromPath(filePath);
    const payload = { channelData: undefined, text: undefined };
    if (isVendorAction(fileContent)) {
        if (fileContent.messageAudience) {
            payload.channelData = { messageAudience: fileContent.messageAudience };
            payload.text = fileContent.text;
        } else if (fileContent.encodedMetadata) {
            payload.channelData = { encodedMetadata: fileContent.encodedMetadata };
            payload.text = fileContent.textResponse;
        } else {
            payload.channelData = fileContent;
        }
    } else {
        payload.channelData = buildRichContent(fileContent, fileName, filePath, usesMetadata);
    }
    return payload;
}

/**
 * Creates the action for the main dialog
 * @param {string} intent
 * @param {number} index
 * @return {Action}
 */
function createActionForMainDialog(intent: string, index: number): Action {
    return {
        $kind: 'Microsoft.SendActivity',
        activity: `\${${intent}_Activity_${index + 1}()}`,
    };
}

/**
 * Creates the trigger section with the provided actions for the main dialog
 * @param {Action[]} actions
 * @param {string} intent
 * @return {Trigger}
 */
function createTriggerForMainDialog(actions: Action[], intent: string): Trigger {
    const trigger: Trigger = {
        $kind: intent === 'welcome' ? 'Microsoft.OnMessageActivity' : 'Microsoft.OnIntent',
        $designer: {
            name: intent === 'welcome' ? 'LP Welcome Message' : intent,
        },
        actions,
    };
    if (intent === 'welcome') {
        trigger.condition = "=exists(turn.Activity.channelData.action.name) && turn.Activity.channelData.action.name == 'WELCOME'";
    } else {
        trigger.intent = intent;
    }
    return trigger;
}

/**
 * Create channelData activity
 * @param {string} intent
 * @param {Payload} payload
 * @param {number} index
 * @return {string}
 */
function createChannelDataActivity(intent: string, payload: Payload, index: number): string {
    const count = index + 1;
    return `
# ${intent}_Activity_${count}()
[Activity
    Text = \${${intent}_Text_${count}()}
    ChannelData = \${json(fromFile("./templates/${intent}.json"))}
]

# ${intent}_Text_${count}()
- ${payload.text || ''}
`;
}

/**
 * Create text activity
 * @param {string} intent
 * @param {string} content
 * @param {number} index
 * @return {string}
 */
function createTextActivity(intent: string, content: string, index: number): string {
    const count = index + 1;
    return `
# ${intent}_Activity_${count}()
[Activity
    Text = \${${intent}_Text_${count}()}
]

# ${intent}_Text_${count}()
- ${content}
`;
}

/**
 * Build the intent with the utterances
 * @param config
 * @return {Intent}
 */
function buildIntentFromUtterances(config: IntentConfigItem): Intent {
    const intent = {
        intent: config.intent,
        pattern: '',
    };
    config.utterance.forEach((utterance, index) => {
        const parsedUtterance = utterance.replace(/\s/g, '\\s');
        if (config.utterance.length === 1) {
            intent.pattern += `(${parsedUtterance}$)`;
        } else if (index === 0) {
            intent.pattern += `(${parsedUtterance}$|`;
        } else if (config.utterance.length === index + 1) {
            intent.pattern += `${parsedUtterance}$)`;
        } else {
            intent.pattern += `${parsedUtterance}$|`;
        }
    });
    return intent;
}

/**
 * Creates for all intents (by intentConfig.json) the related payload json and activity reference.
 * 1. Iterates over intent config
 * 2. Copy main dialog template
 * 3. Parse rich content to action
 * 4. Add action to trigger
 * 5. Add trigger to main dialog template
 * 6. Add local files, language generation file and main dialog to zip file for export
 * @returns {Promise<void>}
 */
export async function buildComposerZipFile(): Promise<void> {
    logger.info(`Started zip file`);
    let files = await getFilesFromDirectory(`${cwd()}/files/richContent`);
    files = filterVendorSpecificRichContent(files, localVendor);
    const localFiles = `${cwd()}/files/botTemplates/Composer`;
    const zipFiles = [];
    const mainDialog = deepcopy(mainDialogTemplate) as MainDialog;
    const triggers: Trigger[] = [];
    const intents: Intent[] = [];
    intentConfig.forEach((config: IntentConfigItem) => {
        const actions: Action[] = [];
        const messages = determineMessages(config, localVendor);
        if (isNotEmptyArray(messages)) {
            messages.forEach((e, index) => {
                if (e.contentType === 'CustomPayload') {
                    const richContentPath = files.find((path) => path.includes(e.content));
                    const payload = buildPayload(richContentPath, hasRelatedMetadataFile(files, richContentPath));
                    languageGenerationFile += createChannelDataActivity(config.intent, payload, index);
                    zipFiles.push({
                        fileName: `language-generation/en-us/templates/${config.intent}.json`,
                        content: payload.channelData,
                    });
                } else {
                    languageGenerationFile += createTextActivity(config.intent, e.content, index);
                }
                actions.push(createActionForMainDialog(config.intent, index));
            });
            triggers.push(createTriggerForMainDialog(actions, config.intent));
            intents.push(buildIntentFromUtterances(config));
        }
    });
    mainDialog.triggers = mainDialog.triggers.concat(triggers);
    mainDialog.recognizer.intents = intents;
    zipFiles.push({
        fileName: 'language-generation/en-us/ThirdPartyBotTemplates.en-us.lg',
        content: languageGenerationFile,
    });
    zipFiles.push({
        fileName: 'ThirdPartyBotTemplates.dialog',
        content: mainDialog,
    });
    await createZipFile(VENDORS.Composer, zipFiles, localFiles);
    logger.info(`Created zip file`);
}
