/* eslint-disable import/first */
const actualRCV = jest.requireActual('@livepersoninc/rich-content-validator');
const actualUtils = jest.requireActual('../../src/utils');
const validateBodyMock = jest.fn(() => ({ valid: true, errors: [] }));
const validateMetadataMock = jest.fn(() => ({ valid: true, errors: [] }));
const validateQuickReplyMock = jest.fn(() => ({ valid: true, errors: [] }));

jest.mock('@livepersoninc/rich-content-validator', () => {
    return {
        __esModule: true,
        ...actualRCV,
        RichContentValidator: jest.fn().mockImplementation(() => {
            return {
                validateBody: validateBodyMock,
                validateMetadata: validateMetadataMock,
                validateQuickReply: validateQuickReplyMock,
            };
        }),
    };
});

jest.mock('../../src/utils', () => {
    return {
        __esModule: true,
        ...actualUtils,
        getFilesFromDirectory: jest.fn(() => ['richContentQR.json', 'richContentMetadata.json', 'richContent.json']),
    };
});

import { validateRichContentTemplates } from '../../src/validator';

beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    jest.restoreAllMocks();
});

describe('Validator', () => {
    it('should validate the rich content templates with true results', async () => {
        jest.mock(
            'richContentQR.json',
            () => ({
                type: 'quickReplies',
            }),
            { virtual: true }
        );
        jest.mock('richContentMetadata.json', () => [], { virtual: true });
        jest.mock(
            'richContent.json',
            () => ({
                type: 'richContent',
            }),
            { virtual: true }
        );
        const response = await validateRichContentTemplates();
        expect(response).toBeTruthy();
    });

    it('should validate the rich content templates with false results', async () => {
        jest.mock(
            'richContentQR.json',
            () => ({
                type: 'quickReplies',
            }),
            { virtual: true }
        );
        jest.mock('richContentMetadata.json', () => [], { virtual: true });
        jest.mock(
            'richContent.json',
            () => ({
                type: 'richContent',
            }),
            { virtual: true }
        );
        validateQuickReplyMock.mockReturnValue({ valid: false, errors: [] });
        const response = await validateRichContentTemplates();
        expect(response).toBeFalsy();
    });
});
