/* eslint-disable import/first */
const buildLexMock = jest.fn();
const customIntegrationMock = jest.fn();
const dialogflowESMock = jest.fn();
const ibmWatsonMock = jest.fn();
const botFrameworkMock = jest.fn();
const composerMock = jest.fn();
jest.mock('../../src/vendors/amazonLex/amazonLex', () => ({
    __esModule: true,
    buildLexZipFile: buildLexMock,
}));
jest.mock('../../src/vendors/customIntegration/customIntegration', () => ({
    __esModule: true,
    buildCustomIntegrationZipFile: customIntegrationMock,
}));
jest.mock('../../src/vendors/dialogflowES/dialogflowES', () => ({
    __esModule: true,
    buildDialogflowESZipFile: dialogflowESMock,
}));
jest.mock('../../src/vendors/ibmWatson/ibmWatson', () => ({
    __esModule: true,
    buildIbmWatsonExport: ibmWatsonMock,
}));
jest.mock('../../src/vendors/microsoft/composer/composer', () => ({
    __esModule: true,
    buildComposerZipFile: composerMock,
}));
jest.mock('../../src/vendors/microsoft/botFramework', () => ({
    __esModule: true,
    buildBotFrameworkZipFile: botFrameworkMock,
}));
jest.mock('../../src/validator', () => ({
    __esModule: true,
    validateRichContentTemplates: jest.fn(() => true),
}));

import { buildZipFilesForVendors } from '../../src';

describe('Index', () => {
    it('should create export files for all vendors', async () => {
        await buildZipFilesForVendors();
        expect(buildLexMock).toBeCalled();
        expect(customIntegrationMock).toBeCalled();
        expect(dialogflowESMock).toBeCalled();
        expect(ibmWatsonMock).toBeCalled();
        expect(botFrameworkMock).toBeCalled();
        expect(composerMock).toBeCalled();
    });
});
