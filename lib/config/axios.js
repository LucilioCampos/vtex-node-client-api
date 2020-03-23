const axios = require('axios').default;

module.exports =  {
    requestByCredential(accountName, appKey, appToken, environment) {
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
    
      requestBySession(accountName, autToken, environment) {
        return axios.create({
          baseURL: `https://${accountName}.${environment}/api`,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'VtexIdclientAutCookie': token
          }
        })
      },
}