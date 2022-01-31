/* eslint-disable import/first */
const actualUtils = jest.requireActual('../../../../src/utils');
const createZipFileMock = jest.fn();
jest.mock('../../../../src/utils', () => ({
    __esModule: true,
    ...actualUtils,
    createZipFile: createZipFileMock,
}));
jest.mock('../../../../src/vendors/intentConfig.json', () => [...require('../helper').intentConfig]);

import { buildBotFrameworkZipFile } from '../../../../src/vendors/microsoft/botFramework';
import { botFrameworkResult } from '../helper';

describe('BotFramework', () => {
    it('should build the BotFramework zip file', async () => {
        await buildBotFrameworkZipFile();
        expect(createZipFileMock).toBeCalledWith('BotFramework', botFrameworkResult, expect.anything());
    });
});
