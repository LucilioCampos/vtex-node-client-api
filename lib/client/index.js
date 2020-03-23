const axios = require('../config/axios');
const routes = require('./apiRoutes')
const Client = function({ accountName, appKey, appToken, autToken = null, environment }) {

    const request = function () {
        if (this.autToken) {
            return axios.requestBySession(accountName, autToken, environment)
        }
        return axios.requestByCredential(accountName, appKey, appToken, environment)
    }

    const sku = require('./sku')(request, routes)

    return {...sku}
}

module.exports = Client