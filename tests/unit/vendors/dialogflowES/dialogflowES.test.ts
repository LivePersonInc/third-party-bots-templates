/* eslint-disable import/first */
const actualUtils = jest.requireActual('../../../../src/utils');
const createZipFileMock = jest.fn();
jest.mock('../../../../src/utils', () => ({
    __esModule: true,
    ...actualUtils,
    createZipFile: createZipFileMock,
}));
jest.mock('../../../../src/vendors/intentConfig.json', () => [...require('../helper').intentConfig]);
jest.mock('uuid', () => {
    return {
        v4: jest.fn(() => 'mockedUUID'),
    };
});

import { buildDialogflowESZipFile } from '../../../../src/vendors/dialogflowES/dialogflowES';
import { dialogflowESResult } from '../helper';

beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    jest.restoreAllMocks();
});

describe('DialogflowES', () => {
    it('should build the DialogflowES zip file', async () => {
        await buildDialogflowESZipFile();
        expect(createZipFileMock).toBeCalledWith('DialogflowES', dialogflowESResult, expect.anything());
    });
});
