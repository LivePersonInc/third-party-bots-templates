/* eslint-disable import/first */
const actualUtils = jest.requireActual('../../../../../src/utils');
const createZipFileMock = jest.fn();
jest.mock('../../../../../src/utils', () => ({
    __esModule: true,
    ...actualUtils,
    createZipFile: createZipFileMock,
}));
jest.mock('../../../../../src/vendors/intentConfig.json', () => [...require('../../helper').intentConfig]);

import { buildComposerZipFile } from '../../../../../src/vendors/microsoft/composer/composer';
import { composerResult } from '../../helper';

describe('Composer', () => {
    it('should build the Composer zip file', async () => {
        await buildComposerZipFile();
        expect(createZipFileMock).toBeCalledWith('Composer', composerResult, expect.anything());
    });
});
