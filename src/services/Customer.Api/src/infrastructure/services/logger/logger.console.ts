import { ILogger } from "./logger.abstraction";
import { injectable } from "inversify";

@injectable()
export class LoggerConsole implements ILogger {

    private _chalk:any;

    constructor() {
        this._chalk = require('chalk');
    }

    debug(msg: string): void {
        console.log(this._chalk.white(msg));
    }
    information(msg: string): void {
        console.log(this._chalk.blue(msg));
    }
    warning(msg: string): void {
        console.log(this._chalk.yellow(msg));
    }
    error(error: Error): void {
        console.log(this._chalk.red(error));
    }

}