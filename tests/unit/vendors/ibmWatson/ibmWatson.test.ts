/* eslint-disable import/first */
const writeFileMock = jest.fn();
jest.mock('../../../../src/vendors/intentConfig.json', () => [...require('../helper').intentConfig]);
jest.mock('fs', () => {
    return {
        writeFileSync: writeFileMock,
    };
});
jest.spyOn(global.Math, 'random').mockReturnValue(1);
const stringifyMock = jest.spyOn(JSON, 'stringify');

import { buildIbmWatsonExport } from '../../../../src/vendors/ibmWatson/ibmWatson';
import { ibmWatsonResult } from '../helper';

describe('IBM Watson', () => {
    it('should build the IBM Watson zip file', async () => {
        await buildIbmWatsonExport();
        expect(writeFileMock).toBeCalledWith(expect.stringContaining('IbmWatson.json'), expect.anything(), { encoding: 'utf8' });
        expect(stringifyMock).toHaveBeenLastCalledWith(ibmWatsonResult, null, 4);
    });
});
