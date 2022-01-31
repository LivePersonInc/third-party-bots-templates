/* eslint-disable import/first */
const admZipMockAddLocalFolder = jest.fn();
const admZipMockAddFile = jest.fn();
const admZipMockWriteZip = jest.fn();

jest.mock('adm-zip', () => {
    return {
        __esModule: true,
        admZipMockAddLocalFolder,
        admZipMockAddFile,
        admZipMockWriteZip,
        default: jest.fn(() => {
            return {
                addLocalFolder: admZipMockAddLocalFolder,
                addFile: admZipMockAddFile,
                writeZip: admZipMockWriteZip,
            };
        }),
    };
});

import {
    buildRichContent,
    createZipFile,
    deepcopy,
    determineMessages,
    filterVendorSpecificRichContent,
    getDirectoryNames,
    getFileNameFromPath,
    getFilesFromDirectory,
    hasRelatedMetadataFile,
    isNotEmptyArray,
    isQrReply,
    isVendorAction,
    requireFile,
} from '../../src/utils';

beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
});

describe('Utils', () => {
    it('should deep copy an object', () => {
        const obj = { test: 'test' };
        const newObj = deepcopy(obj);
        expect(obj).toEqual(newObj);
    });

    it('should get files from directory', async () => {
        const files = await getFilesFromDirectory('./files/richContent/vendorActions/agentTransfer');
        expect(
            files.some(
                (e) =>
                    e.includes('/files/richContent/vendorActions/agentTransfer/agentTransfer.json') ||
                    e.includes('/files/richContent/vendorActions/agentTransfer/BotFramework/agentTransfer.json')
            )
        ).toBeTruthy();
    });

    it('should get directory names', async () => {
        const dirs = await getDirectoryNames('./');
        expect(dirs.some((e) => e === 'package.json' || e === '.gitignore')).toBeTruthy();
    });

    it('should get file name from a passed path', () => {
        const fileName = getFileNameFromPath('./test/templates/richContent.json');
        expect(fileName).toEqual('richContent');
    });

    it('should check if the passed object is a quick reply', () => {
        const qr = { type: 'quickReplies' };
        expect(isQrReply(qr)).toBeTruthy();
    });

    it('should check if the passed object is vendor action', () => {
        const vendorAction1 = { type: 'ACTION' };
        const vendorAction2 = { type: 'client' };
        const vendorAction3 = { action: 'transferAgent' };
        expect(isVendorAction(vendorAction1)).toBeTruthy();
        expect(isVendorAction(vendorAction2)).toBeTruthy();
        expect(isVendorAction(vendorAction3)).toBeTruthy();
    });

    it('should check if the passed file has metadata', () => {
        const files = ['test/richContent.json', 'test/richContentMetadata.json'];
        const fileName = 'test/richContent.json';
        expect(hasRelatedMetadataFile(files, fileName)).toBeTruthy();
    });

    it('should create a zip file with .json file', async () => {
        const zipName = 'test';
        const content = [{ fileName: 'testFile.json', content: { test: 'hello' } }];
        const localFiles = `/tests/`;
        await createZipFile(zipName, content, localFiles);
        expect(admZipMockAddLocalFolder).toBeCalledWith(localFiles);
        expect(admZipMockAddFile).toBeCalledWith('testFile.json', expect.any(Buffer), 'utf8');
        expect(admZipMockWriteZip).toBeCalledWith(`./export/${zipName}.zip`);
    });

    it('should create a zip file with .dialog file', async () => {
        const zipName = 'test';
        const content = [{ fileName: 'testFile.dialog', content: { test: 'hello' } }];
        const localFiles = `/tests/`;
        await createZipFile(zipName, content, localFiles);
        expect(admZipMockAddLocalFolder).toBeCalledWith(localFiles);
        expect(admZipMockAddFile).toBeCalledWith('testFile.dialog', expect.any(Buffer), 'utf8');
        expect(admZipMockWriteZip).toBeCalledWith(`./export/${zipName}.zip`);
    });

    it('should create a zip file with object', async () => {
        const zipName = 'test';
        const content = [{ fileName: 'testFile.txt', content: { test: 'hello' } }];
        const localFiles = `/tests/`;
        await createZipFile(zipName, content, localFiles);
        expect(admZipMockAddLocalFolder).toBeCalledWith(localFiles);
        expect(admZipMockAddFile).toBeCalledWith('testFile.txt', expect.any(Object), 'utf8');
        expect(admZipMockWriteZip).toBeCalledWith(`./export/${zipName}.zip`);
    });

    it('should build rich content with structured content and metadata', () => {
        jest.mock(
            'testMetadata.json',
            () => {
                return { test: '123' };
            },
            { virtual: true }
        );
        const fileContent = {
            type: 'button',
            message: 'Hello',
        };
        const fileName = 'test';
        const filePath = 'test.json';
        const richContent = buildRichContent(fileContent, fileName, filePath, true);
        expect(richContent).toEqual({
            metadata: {
                test: '123',
            },
            structuredContent: {
                type: 'button',
                message: 'Hello',
            },
        });
    });

    it('should build rich content with quick replies', () => {
        jest.mock(
            'qr.json',
            () => {
                return { button: 'press' };
            },
            { virtual: true }
        );
        jest.mock(
            'qrMessage.json',
            () => {
                return { message: 'Hello' };
            },
            { virtual: true }
        );
        const fileContent = {
            type: 'quickReplies',
            message: 'Hello',
        };
        const fileName = 'qr';
        const filePath = 'qr.json';
        const qr = buildRichContent(fileContent, fileName, filePath, false);
        expect(qr).toEqual({
            metadata: [],
            structuredContent: {
                quickReplies: {
                    button: 'press',
                },
                message: 'Hello',
            },
        });
    });

    it('should filter vendor specific rich content', () => {
        const files = [
            './test/buttons/BotFramework/button.json',
            './test/buttons/button.json',
            './test/cards/BotFramework/card.json',
            './test/cards/card.json',
        ];
        const vendor = 'BotFramework';
        const filteredFiles = filterVendorSpecificRichContent(files, vendor);
        expect(filteredFiles).toEqual(['./test/buttons/BotFramework/button.json', './test/cards/BotFramework/card.json']);
    });

    it('should check if the array is not empty', () => {
        expect(isNotEmptyArray([])).toBeFalsy();
        expect(isNotEmptyArray(['test'])).toBeTruthy();
    });

    it('should determine which message should be used', () => {
        const config = {
            intent: 'test intent',
            messages: {
                Lex: [
                    {
                        content: 'Test Lex',
                        contentType: 'Plain Text',
                    },
                ],
                default: [
                    {
                        content: 'Test default',
                        contentType: 'Plain Text',
                    },
                ],
            },
            utterance: [],
        };
        const messagesLex = determineMessages(config, 'Lex');
        const messagesDefault = determineMessages(config, 'CustomIntegration');
        expect(messagesLex).toEqual(config.messages.Lex);
        expect(messagesDefault).toEqual(config.messages.default);
    });

    it('should throw an error if the required file cannot be found', () => {
        const error = new Error('Could not load file from ./testFile.json. Please make sure the file exists.');
        expect(() => {
            requireFile('./testFile.json');
        }).toThrow(error);
    });
});
