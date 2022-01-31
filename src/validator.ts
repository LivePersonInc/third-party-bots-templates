import { RichContentValidator, Channels } from '@livepersoninc/rich-content-validator';
import { IValidationResult } from '@livepersoninc/rich-content-validator/dist/types';

import { cwd } from 'process';
import { getFileNameFromPath, getFilesFromDirectory, requireFile } from './utils';
import { LogFactory } from './logger';

const channelMap = new Map([
    ['facebook', Channels.FB],
    ['apple', Channels.ABC],
    ['line', Channels.LINE],
    ['whatsapp', Channels.WA],
    ['gbm', Channels.GBM],
    ['rcs', Channels.RBM],
    ['web', Channels.WEB],
]);

const logger = new LogFactory('Rich Content Validator').build();

/**
 * Checks if all templates in the files/richContent folder are valid.
 * Validation is done with the RichContentValidator lib.
 * @export
 * @returns {Promise<boolean>}
 */
export async function validateRichContentTemplates(): Promise<boolean> {
    let response = true;

    for (const [key, value] of channelMap) {
        logger.info(`Started testing for ${value}`);
        const config = {
            channel: value,
            declinePastDates: false,
        };

        const rcValidator = new RichContentValidator(config);

        const filePaths = await getFilesFromDirectory(`${cwd()}/files/richContent/channels/${key}`);
        let filePathsWithoutMessage = filePaths.filter(
            (element: string | string[]) => !element.includes('Message') && element.includes('.json')
        );

        // TODO: Remove this if RCV is updated with webDatePicker and webScheduleSlotList
        if (value === Channels.WEB) {
            logger.warn('Check if RCV supports webDatePicker and webScheduleSlotList');
            filePathsWithoutMessage = filePathsWithoutMessage.filter(
                (e) => !e.includes('webDatePicker') && !e.includes('webScheduleSlotList')
            );
        }

        for (const element of filePathsWithoutMessage) {
            const filePath = getFileNameFromPath(element);
            const jsonFile = requireFile(element);
            let rcResult: IValidationResult;

            if (jsonFile.type === 'quickReplies') {
                rcResult = rcValidator.validateQuickReply(jsonFile);
            } else if (filePath.includes('Metadata') && Array.isArray(jsonFile)) {
                rcResult = rcValidator.validateMetadata(jsonFile);
            } else {
                rcResult = rcValidator.validateBody(jsonFile);
            }

            if (!rcResult.valid) {
                logger.error(`Found an issue with the ${filePath} in ${value} with error ${JSON.stringify(rcResult.errors, null, 2)}`);
                response = false;
                break;
            }
        }
        if (!response) {
            break;
        }
        logger.info(`Ended testing for ${value} with result ${response}`);
    }
    return response;
}
