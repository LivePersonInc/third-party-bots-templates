/* eslint-disable import/first */
const actualUtils = jest.requireActual('../../../../src/utils');
const createZipFileMock = jest.fn();
jest.mock('../../../../src/utils', () => ({
    __esModule: true,
    ...actualUtils,
    createZipFile: createZipFileMock,
}));
jest.mock('../../../../src/vendors/intentConfig.json', () => [...require('../helper').intentConfig]);

import { buildCustomIntegrationZipFile } from '../../../../src/vendors/customIntegration/customIntegration';
import { customIntegrationResult } from '../helper';

beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    jest.restoreAllMocks();
});

describe('CustomIntegration', () => {
    it('should build the custom integration zip file', async () => {
        await buildCustomIntegrationZipFile();
        expect(createZipFileMock).toBeCalledWith('CustomIntegrationTemplates', customIntegrationResult);
    });
});
