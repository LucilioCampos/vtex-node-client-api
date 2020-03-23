declare interface IClient {
    accountName: string,
    appKey?: string,
    appToken?: string,
    autToken?: string,
    enviroment: string

}
export declare const Client: (client: IClient) => void;
