const axios = require('../config/axios');
const routes = require('./apiRoutes')
module.exports = ({ accountName, appKey, appToken, autToken=null, environment }) =>  {
   
    const request = function (){
        if (this._autToken) {
            return axios.requestBySession(accountName, autToken, environment)
        } 
        return axios.requestByCredential(accountName, appKey, appToken, environment) 
    }

    return {
        getSkus: async function(page, perPage) {
            try {
                const {data: response} = await request().get(routes.SKU + `?page=${page}&pagesize=${perPage}`)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },
    
        getSkusByRefId: async function(refs=[]) {
            try {
                const response = await request().post(routes.SKUBYREF, refs)
                return response.data
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getSkuById: async function(id) {
            try {
                const { data: response} = await request().get(routes.SKUBYID + id)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        }
    }

}