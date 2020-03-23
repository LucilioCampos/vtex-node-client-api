const axios = require('axios').default;

const request = {
  requestByCredential: function(accountName, appKey, appToken, environment) {
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
  
    requestBySession: function(accountName, autToken, environment) {
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
module.exports = request