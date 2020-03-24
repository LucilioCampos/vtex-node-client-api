const { requestByCredential, requestBySession } = require('../config/axios');

module.exports = function ({ accountName, appKey, appToken, autToken = null, environment }) {

    const request = function () {
        if (autToken) {
            return requestBySession(accountName, autToken, environment)
        }
        return requestByCredential(accountName, appKey, appToken, environment)
    }

    const sku = require('./sku')(request)

    return { sku }
}