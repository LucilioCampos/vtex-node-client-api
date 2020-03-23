const axios = require('../config/axios');
const routes = require('./apiRoutes')
module.exports = ({ accountName, appKey, appToken, autToken=null, environment }) =>  {
   
    const request = function (){
        if (this.autToken) {
            return axios.requestBySession(accountName, autToken, environment)
        } 
        return axios.requestByCredential(accountName, appKey, appToken, environment) 
    }

    const sku = require('./sku')(request, routes)

    return {
        getSkus: async function(page, perPage) {
            return await sku.getSkus(page, perPage)
        },
    
        getSkusByRefId: async function(refs=[]) {
           return await sku.getSkusByRefId(refs)
        },

        getSkuById: async function(id) {
           return await sku.getSkuById(id)
        }
    }

   

}