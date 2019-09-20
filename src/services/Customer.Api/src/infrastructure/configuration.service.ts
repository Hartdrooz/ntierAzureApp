export interface IConfiguration {
    port: number;
}

export class Configuration implements IConfiguration {
    get port(): number {
        const port = process.env.PORT;

        return port === null ? 3000 : parseInt(port);
    }
}