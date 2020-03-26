const { requestByCredential, requestBySession } = require('../config/axios');

module.exports = function ({ accountName, appKey, appToken, autToken = null, environment }) {

    const request = function () {
        if (autToken) {
            return requestBySession(accountName, autToken, environment)
        }
        return requestByCredential(accountName, appKey, appToken, environment)
    }

    const specification = require('./specification')(request)
    const sku = require('./sku')(request)
    const product = require('./products')(request)

    return { sku, product, specification }
}