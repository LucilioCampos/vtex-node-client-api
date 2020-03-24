
const routes = require('./apiRoutes')

/**
 * 
 * @param {AxiosInstance} request AxiosInstance with configured headers
 */
const sku = (request) => {
    return {
        /**
         * 
         * @param {Number} page select which page is requested
         * @param {Number} perPage select quantity per page
         */
        getIds: async function(page, perPage) {
            try {
                const {data: response} = await request().get(routes.SKU + `?page=${page}&pagesize=${perPage}`)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },
    
        getByRefId: async function(refs) {
            try {
                const response = await request().post(routes.SKUBYREF, refs)
                return response.data
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getById: async function(id) {
            try {
                const { data: response} = await request().get(routes.SKUBYID + id)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getByEan: async function(ean) {
            try {
                const { data: response} = await request().get(routes.SKUBYEAN + ean)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getByProductId: async function(productId) {
            try {
                const { data: response} = await request().get(routes.SKUBYPRODUCT + productId)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        associateAttachments: async function({skuId, AttachmentNames}) {
            try {
                const { data: response} = await request().post(routes.SKUATTACHMENTS, {skuId, AttachmentNames})
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        create: async function(body) {
            try {
                const { data: response } = await request().post(routes.SKUCREATE, body)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        insertEspecification: async function(skuId, {FieldId, FieldValueId}) {
            try {
                const url = `${routes.SKUCREATE}/${skuId}/specification`
                const { data: response } = await request().post(url, {FieldId, FieldValueId})
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        insertFile: async function(skuId, skuFileId, {IsMain, Label, Name, Text, Url}) {
            try {
                const url = `${routes.SKUCREATE}/${skuId}/file/${skuFileId}`
                const { data: response } = await request().post(url, {IsMain, Label, Name, Text, Url})
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        }
    }
}

module.exports = sku