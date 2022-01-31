import { validateRichContentTemplates } from './validator';
import { buildLexZipFile } from './vendors/amazonLex/amazonLex';
import { buildCustomIntegrationZipFile } from './vendors/customIntegration/customIntegration';
import { buildDialogflowESZipFile } from './vendors/dialogflowES/dialogflowES';
import { buildBotFrameworkZipFile } from './vendors/microsoft/botFramework';
import { LogFactory } from './logger';
import { buildIbmWatsonExport } from './vendors/ibmWatson/ibmWatson';
import { buildComposerZipFile } from './vendors/microsoft/composer/composer';

const logger = new LogFactory('Bot Templates').build();

/**
 * Creates all export files if the validation of the rich content was successful
 * @returns {Promise<void>}
 */
export async function buildZipFilesForVendors(): Promise<void> {
    if (await validateRichContentTemplates()) {
        await buildLexZipFile();
        await buildCustomIntegrationZipFile();
        await buildDialogflowESZipFile();
        await buildBotFrameworkZipFile();
        await buildIbmWatsonExport();
        await buildComposerZipFile();
        logger.info('Successfully finished all exports');
    }
}

buildZipFilesForVendors();
