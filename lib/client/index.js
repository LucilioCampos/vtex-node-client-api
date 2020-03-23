const axios = require('../config/axios');
const routes = require('./apiRoutes')
module.exports = ({ accountName, appKey, appToken, autToken = null, environment }) => {

    const request = function () {
        if (this.autToken) {
            return axios.requestBySession(accountName, autToken, environment)
        }
        return axios.requestByCredential(accountName, appKey, appToken, environment)
    }

    const sku = require('./sku')(request, routes)

    return {...sku}
}