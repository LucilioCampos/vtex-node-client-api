const { requestByCredential, requestBySession} = require('../config/axios');
const routes = require('./apiRoutes')
module.exports = ({ accountName, appKey, appToken, autToken = null, environment }) => {

    const request = function () {
        if (this.autToken) {
            return requestBySession(accountName, autToken, environment)
        }
        return requestByCredential(accountName, appKey, appToken, environment)
    }

    const sku = require('./sku')(request, routes)

    return {...sku}
}