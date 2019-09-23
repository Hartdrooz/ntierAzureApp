export interface ILogger {
    debug(msg:string): void;
    information(msg:string): void;
    warning(msg:string): void;
    error(error:Error): void;    
}
