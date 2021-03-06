
const {
    SKU_IDS,
    BY_REF,
    BY_ID,
    CREATE,
    BY_EAN,
    BY_PRODUCT,
    ATTACHMENTS
} = require('./apiRoutes').SKU

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
                const {data: response} = await request().get(SKU_IDS + `?page=${page}&pagesize=${perPage}`)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },
    
        getByRefId: async function(refs) {
            try {
                const response = await request().post(BY_REF, refs)
                return response.data
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getById: async function(id) {
            try {
                const { data: response} = await request().get(BY_ID + id)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getByEan: async function(ean) {
            try {
                const { data: response} = await request().get(BY_EAN + ean)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getByProductId: async function(productId) {
            try {
                const { data: response} = await request().get(BY_PRODUCT + productId)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        associateAttachments: async function({skuId, AttachmentNames}) {
            try {
                const { data: response} = await request().post(ATTACHMENTS, {skuId, AttachmentNames})
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        create: async function(body) {
            try {
                const { data: response } = await request().post(CREATE, body)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        insertEspecification: async function(skuId, {FieldId, FieldValueId}) {
            try {
                const url = `${CREATE}/${skuId}/specification`
                const { data: response } = await request().post(url, {FieldId, FieldValueId})
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        insertFile: async function(skuId, skuFileId, {IsMain, Label, Name, Text, Url}) {
            try {
                const url = `${CREATE}/${skuId}/file/${skuFileId}`
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