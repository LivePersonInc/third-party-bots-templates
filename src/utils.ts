import { readdir } from 'fs/promises';
import { resolve } from 'path';
import AdmZip from 'adm-zip';

export const VENDORS = {
    Lex: 'Lex',
    DialogflowCX: 'DialogflowCX',
    DialogflowES: 'DialogflowES',
    CustomIntegration: 'CustomIntegration',
    BotFramework: 'BotFramework',
    IbmWatson: 'IbmWatson',
    Composer: 'Composer',
};

type IVendor = typeof VENDORS;
export type VendorType = IVendor[keyof IVendor];

export type IntentConfigMessageItem = {
    content: string;
    contentType: string;
};

export type IntentConfigItem = {
    intent: string;
    messages: {
        [vendor: string]: IntentConfigMessageItem[];
    };
    utterance: string[];
};

export type ZipContent = {
    fileName: string;
    content: unknown;
};

export type StructuredContentQR = {
    metadata: Array<unknown>;
    structuredContent: {
        quickReplies: unknown;
        message: string;
    };
};

export type StructuredContent = {
    metadata: Array<unknown>;
    structuredContent: unknown;
};

export function requireFile(filePath: string): any {
    try {
        return require(filePath);
    } catch {
        throw new Error(`Could not load file from ${filePath}. Please make sure the file exists.`);
    }
}

/**
 * Deep copy the provided object
 * @param obj
 * @returns {Object}
 */
export function deepcopy(obj: unknown): unknown {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Returns all file paths for a provided directory
 * @export
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
export async function getFilesFromDirectory(dir: string) {
    const dirents = await readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        dirents.map((dirent) => {
            const res = resolve(dir, dirent.name);
            return dirent.isDirectory() ? getFilesFromDirectory(res) : res;
        })
    );
    return Array.prototype.concat(...files);
}

/**
 * Returns all sub directory names for a provided directory
 * @export
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
export async function getDirectoryNames(dir: string): Promise<string[]> {
    return readdir(dir);
}

/**
 * Returns the file name of a provided file path
 * @export
 * @param {string} fileName
 * @returns {string}
 */
export function getFileNameFromPath(fileName: string): string {
    return fileName.split('\\').pop().split('/').pop().split('.').shift();
}

/**
 * Checks if the given file content is a quick reply
 * @export
 * @param {*} fileContent
 * @returns {boolean}
 */
export function isQrReply(fileContent: any): boolean {
    return fileContent.type === 'quickReplies';
}

/**
 * Checks if the given file content is a vendor action
 * @export
 * @param {*} fileContent
 * @returns {boolean}
 */
export function isVendorAction(fileContent: any): boolean {
    return !fileContent.type || fileContent.type === 'ACTION' || fileContent.type === 'client';
}

/**
 * Checks if the given file path has a related meta data file
 * @export
 * @param {string[]} files
 * @param {string} filePath
 * @returns {boolean}
 */
export function hasRelatedMetadataFile(files: string[], filePath: string): boolean {
    const fileName = getFileNameFromPath(filePath);
    return files.some((e) => e.includes(`${fileName}Metadata`));
}

/**
 * Prepare zip content as Buffer
 * @param {unknown} content
 * @return {Buffer}
 */
function prepareZipJsonContent(content: unknown): Buffer {
    return Buffer.from(JSON.stringify(content, null, 2));
}

/**
 * Creates a zip file by the given name and content. Zip file will be saved in the export folder
 * @export
 * @param {string} zipName - name of the zip file
 * @param {Array<ZipContent>} content
 * @param {string} localFiles
 * @returns {Promise<void>}
 */
export async function createZipFile(zipName: string, content: Array<ZipContent>, localFiles?: string): Promise<void> {
    const zip = new AdmZip();
    if (localFiles) {
        zip.addLocalFolder(localFiles);
    }
    content.forEach((e) => {
        zip.addFile(
            e.fileName,
            e.fileName.includes('.json') || e.fileName.includes('.dialog') ? prepareZipJsonContent(e.content) : e.content,
            'utf8'
        );
    });
    await zip.writeZip(`./export/${zipName}.zip`);
}

/**
 * Build a quick reply with the related messages based on the provided file path
 * Quick reply file and message file needs to be in the same folder
 * For example webCardQR and webCardQRMessage
 * @export
 * @param {string} filePath
 * @returns {StructuredContentQR}
 */
export function buildQuickReplyWithMessage(filePath: string): StructuredContentQR {
    const fileName = getFileNameFromPath(filePath);
    const quickReply = requireFile(filePath);
    const quickReplyMessage = requireFile(filePath.replace(`${fileName}.json`, `${fileName}Message.json`));
    return {
        metadata: [],
        structuredContent: {
            quickReplies: quickReply,
            ...quickReplyMessage,
        },
    };
}

/**
 * Builds rich content based on the provided content and filename
 * @export
 * @param {unknown} fileContent
 * @param {string} fileName
 * @param {string} filePath
 * @param {boolean} addMetadata
 * @returns {StructuredContent}
 */
export function buildRichContent(fileContent: unknown, fileName: string, filePath: string, addMetadata: boolean): StructuredContent {
    let payload: StructuredContent;
    if (isQrReply(fileContent)) {
        payload = buildQuickReplyWithMessage(filePath);
    } else {
        payload = {
            metadata: [],
            structuredContent: fileContent,
        };
    }
    if (addMetadata) {
        payload.metadata = requireFile(filePath.replace(fileName, `${fileName}Metadata`));
    }
    return payload;
}

/**
 * Checks if there is vendors specific rich content
 * Additionally it removes all other files which are related to the other vendors
 * @export
 * @param {string[]} files
 * @param {VendorType} vendor
 * @returns {string[]}
 */
export function filterVendorSpecificRichContent(files: string[], vendor: VendorType): string[] {
    files.forEach((file) => {
        const fileName = getFileNameFromPath(file);
        const hasVendorSpecificRichContent = file.includes(`/${vendor}/${fileName}`);
        if (hasVendorSpecificRichContent) {
            file = file.replace(`/${vendor}`, '');
            files = files.filter((e) => !e.includes(file));
        }
    });
    const otherVendors = Object.entries(VENDORS)
        .map((e) => e[1])
        .filter((e) => e !== vendor);
    otherVendors.forEach((otherVendor) => (files = files.filter((file) => !file.includes(otherVendor))));
    return files;
}

/**
 * Check if array is not empty
 * @export
 * @param array
 * @return {boolean}
 */
export function isNotEmptyArray(array: unknown[]): boolean {
    return Array.isArray(array) && array.length !== 0;
}

/**
 * Determines which messages of intent config should be used for processing
 * Either the default messages or vendor specific ones.
 * @export
 * @param config
 * @param vendor
 * @return {IntentConfigMessageItem[]}
 */
export function determineMessages(config: IntentConfigItem, vendor: string): IntentConfigMessageItem[] {
    const shouldUseDefaultMessages = !(vendor in config.messages);
    return shouldUseDefaultMessages ? config.messages.default : config.messages[vendor];
}
