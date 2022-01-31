import { cwd } from 'process';
import {
    getFilesFromDirectory,
    getFileNameFromPath,
    hasRelatedMetadataFile,
    isVendorAction,
    getDirectoryNames,
    createZipFile,
    buildRichContent,
    filterVendorSpecificRichContent,
    determineMessages,
    isNotEmptyArray,
    VENDORS,
    requireFile,
} from '../../utils';
import intentConfig from '../intentConfig.json';
import { LogFactory } from '../../logger';

const logger = new LogFactory(VENDORS.CustomIntegration).build();

type Payload = {
    messages: Array<unknown>;
    context: unknown;
    intent: string;
};

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
    if (fileContent.delay || fileContent.messageAudience) {
        payload.messages.push(fileContent);
    } else if (isVendorAction(fileContent)) {
        payload.context = fileContent;
    } else {
        payload.messages.push(buildRichContent(fileContent, fileName, filePath, usesMetadata));
    }
    return payload;
}

/**
 * Iterates through the intentConfig and builds the related lambda payloads
 * 1. Iterates over intent config
 * 2. Parse rich content to intent template
 * 3. Add the payloads to payload collection
 * @returns {Promise<Array<Payload>>}
 */
async function createLambdaPayloads(): Promise<Array<Payload>> {
    let files = await getFilesFromDirectory(`${cwd()}/files/richContent`);
    files = filterVendorSpecificRichContent(files, VENDORS.CustomIntegration);
    const payloadCollection = [];
    intentConfig.forEach((config) => {
        let payload = { messages: [], context: {}, intent: config.intent };
        const messages = determineMessages(config, VENDORS.CustomIntegration);
        if (isNotEmptyArray(messages)) {
            messages.forEach((e) => {
                if (e.contentType === 'CustomPayload') {
                    const richContentPath = files.find((path) => path.includes(e.content));
                    payload = buildPayload(payload, richContentPath, hasRelatedMetadataFile(files, richContentPath));
                } else {
                    payload.messages.push(e.content);
                }
                return payload;
            });
            payloadCollection.push(payload);
        }
    });
    return payloadCollection;
}

/**
 * Filters the payloads that are related to the vendor actions
 * @param {string[]} channels
 * @param {Payload[]} payloads
 * @returns {Payload[]}
 */
function getVendorActionsPayload(channels: string[], payloads: Payload[]): Payload[] {
    channels.forEach((channel) => {
        payloads = payloads.filter((e) => !e.intent.includes(channel));
    });
    return payloads;
}

/**
 * Creates for each channel a json file with the related rich content
 * All will be bundled in one zip file in the export folder
 * 1. Iterates over the different channels
 * 2. Filter payloadCollection for the current channel
 * 3. Create a lambda function and append the other payloads
 * 4. Saves every channel as separate file in the export
 * @export
 * @returns {Promise<void>}
 */
export async function buildCustomIntegrationZipFile(): Promise<void> {
    logger.info(`Started zip file`);
    const indentString = (str: string, count: number, indent = ' ') => str.replace(/^/gm, indent.repeat(count));

    const channels = [...(await getDirectoryNames(`${cwd()}/files/richContent/channels`)), 'vendorActions'];
    const payloads = await createLambdaPayloads();
    const zipFiles = [];

    for (const channel of channels) {
        let lambda = `function lambda(input, callback) {\n\n`;
        let callbackFunctionName: string;

        const filteredPayloads =
            channel === 'vendorActions' ? getVendorActionsPayload(channels, payloads) : payloads.filter((e) => e.intent.includes(channel));

        filteredPayloads.forEach((e, index) => {
            if (index === 0) callbackFunctionName = e.intent;
            const payload = indentString(
                `const ${e.intent} = ${JSON.stringify(
                    {
                        messages: e.messages,
                        context: e.context,
                    },
                    null,
                    4
                )}`,
                4
            );
            lambda += `${payload}\n\n`;
        });

        lambda += `    callback(null, ${callbackFunctionName});
}`;
        zipFiles.push({ fileName: `${channel}.js`, content: lambda });
    }

    await createZipFile('CustomIntegrationTemplates', zipFiles);
    logger.info(`Created zip file`);
}
