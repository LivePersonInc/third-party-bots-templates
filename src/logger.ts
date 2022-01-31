import { createLogger, format, transports } from 'winston';

const Level = {
    Debug: 'debug',
    Info: 'info',
    Warn: 'warn',
    Error: 'error',
};

export interface ILogger {
    debug(msg: string, ...meta: unknown[]);

    info(msg: string, ...meta: unknown[]);

    warn(msg: string, ...meta: unknown[]);

    error(msg: string, ...meta: unknown[]);

    trace(...args: unknown[]): void;
}

export class LogFactory {
    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    public build(): ILogger {
        let logLevel = Level.Info;

        /* istanbul ignore next */
        const myFormat = format.printf(({ level, message, timestamp, label }) => {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            return `${timestamp} [${label}] ${level}: ${message}`;
        });

        const transport = new transports.Console({
            silent: process.env.DISABLE_LOGGING === 'true',
        });

        /* istanbul ignore else */
        if (process.env.LOG_LEVEL) {
            logLevel = process.env.LOG_LEVEL;
        }

        const logger = createLogger({
            level: logLevel,
            format: format.combine(format.label({ label: this.name }), format.timestamp(), format.prettyPrint(), myFormat),
            transports: [transport],
        });
        /* istanbul ignore next */
        // As Trace is required
        // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
        (logger as any).trace = () => {};

        return logger as unknown as ILogger;
    }
}
