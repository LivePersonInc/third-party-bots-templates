/* eslint-disable import/first */
const actualUtils = jest.requireActual('../../../../src/utils');
const createZipFileMock = jest.fn();
jest.mock('../../../../src/utils', () => ({
    __esModule: true,
    ...actualUtils,
    createZipFile: createZipFileMock,
}));
jest.mock('../../../../src/vendors/intentConfig.json', () => [...require('../helper').intentConfig]);

import { buildLexZipFile } from '../../../../src/vendors/amazonLex/amazonLex';
import { lexResult } from '../helper';

beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    jest.restoreAllMocks();
});

describe('AmazonLex', () => {
    it('should build the lex zip file', async () => {
        await buildLexZipFile();
        expect(createZipFileMock).toBeCalledWith('AmazonLexTemplates', [
            {
                fileName: 'AmazonLexTemplates.json',
                content: lexResult,
            },
        ]);
    });
});
