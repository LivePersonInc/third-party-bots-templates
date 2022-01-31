import { LogFactory } from '../../src/logger';

describe('Logger', function () {
    describe('Customizable log level', () => {
        it('Should use the default value', () => {
            const logger = new LogFactory('UnitTest').build() as any;

            expect(logger.level).toEqual('info');
        });

        it('Should use the log level from process env', () => {
            process.env.LOG_LEVEL = 'warn';
            const logger = new LogFactory('UnitTest').build() as any;

            expect(logger.level).toEqual('warn');
        });
    });
});
