import { cwd } from 'process';
import {
    getFilesFromDirectory,
    getFileNameFromPath,
    hasRelatedMetadataFile,
    isVendorAction,
    buildRichContent,
    filterVendorSpecificRichContent,
    createZipFile,
    determineMessages,
    isNotEmptyArray,
    VENDORS,
    requireFile,
} from '../../utils';
import intentConfig from '../intentConfig.json';
import { LogFactory } from '../../logger';

type Payload = { type: string; text: string; channelData?: unknown };

const logger = new LogFactory(VENDORS.BotFramework).build();

/**
 * Builds the payload by the provided file path
 * @param {Payload} payload
 * @param {string} filePath
 * @param {boolean} usesMetadata
 * @returns {Payload}
 */
function buildPayload(payload: Payload, filePath: string, usesMetadata: boolean): Payload {
    const fileContent = requireFile(filePath);
    const fileName = getFileNameFromPath(filePath);
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
 * Creates for each intent a exported function
 * @returns {Promise<void>}
 */
function createExportedFunction(intent: string, payload: Payload[]): string {
    return `export function ${intent}() {
    return ${JSON.stringify(payload, null, 8)}
}\n\n`;
}

/**
 * Iterates through the intentConfig and builds the related functions
 * 1. Iterates over intent config
 * 2. Parse rich content and adds it to the functions file
 * 3. Adds utterances
 * 4. Adds functions, utterances and local files to the zip files for export
 * @returns {Promise<void>}
 */
export async function buildBotFrameworkZipFile(): Promise<void> {
    logger.info(`Started zip file`);
    let files = await getFilesFromDirectory(`${cwd()}/files/richContent`);
    files = filterVendorSpecificRichContent(files, VENDORS.BotFramework);
    const localFiles = `${cwd()}/files/botTemplates/BotFramework`;
    const zipFiles = [];
    const utterances = {};
    let functions = '';
    intentConfig.forEach((config) => {
        const payload: Payload[] = [];
        const messages = determineMessages(config, VENDORS.BotFramework);
        if (isNotEmptyArray(messages)) {
            messages.forEach((e) => {
                if (e.contentType === 'CustomPayload') {
                    const richContentPath = files.find((path) => path.includes(e.content));
                    const customPayload = { type: 'message', text: '', channelData: {} };
                    payload.push(buildPayload(customPayload, richContentPath, hasRelatedMetadataFile(files, richContentPath)));
                } else {
                    payload.push({ type: 'message', text: e.content });
                }
                return payload;
            });
            functions += `${createExportedFunction(config.intent, payload)}\n`;
            utterances[config.intent] = config.utterance.map((e) => e.toLowerCase());
        }
    });
    zipFiles.push({ fileName: 'src/richContent.ts', content: functions });
    zipFiles.push({ fileName: 'src/intents.json', content: utterances });
    await createZipFile(VENDORS.BotFramework, zipFiles, localFiles);
    logger.info(`Created zip file`);
}
