import { injectable } from "inversify";

export interface IConfiguration {
    port: number;
}

@injectable()
export class Configuration implements IConfiguration {
    get port(): number {
        const port = process.env.PORT;
        
        if (port === null || port === undefined)
            return 3000;

        return parseInt(port);
    }
}