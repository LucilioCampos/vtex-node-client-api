import axios, { AxiosInstance} from 'axios'

declare interface ICredentials {
  accountName: string,
  appKey: string,
  appToken: string,
  environment: string,
}

declare interface ISession {
  accountName: string,
  environment: string,
  autToken: string
}

export default {
    requestByCredential(credentials: ICredentials): AxiosInstance {
      const { accountName, appKey, appToken, environment} = credentials
        return axios.create({
          baseURL: `https://${accountName}.${environment}/api`,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VTEX-API-AppToken': appToken,
            'X-VTEX-API-AppKey': appKey
          }
        })
      },
    
      requestBySession(session: ISession): AxiosInstance {
        const { accountName, autToken, environment} = session;
        return axios.create({
          baseURL: `https://${accountName}.${environment}/api`,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'VtexIdclientAutCookie': autToken
          }
        })
      },
}