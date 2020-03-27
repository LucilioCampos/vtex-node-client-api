import { AxiosInstance } from 'axios';
declare interface ICredentials {
    accountName: string;
    appKey: string;
    appToken: string;
    environment: string;
}
declare interface ISession {
    accountName: string;
    environment: string;
    autToken: string;
}
declare const _default: {
    requestByCredential(credentials: ICredentials): AxiosInstance;
    requestBySession(session: ISession): AxiosInstance;
};
export default _default;
