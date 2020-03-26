const { 
    BY_ID, 
    REF_ID, 
    VARIATIONS, 
    BY_CATEGORY_ID, 
    REVIEW_RATE, 
    SPECIFICATION,
    CREATE,
    UPDATE_SPECIFICATION
} = require('./apiRoutes').PRODUCT

/**
 * 
 * @param {AxiosInstance} request AxiosInstance with configured headers
 */
const product = (request) => {
    return {
        /**
         * 
         * @param {String} product Product unique indetifier
         */
        getById: async function(productId) {
            try {
                const {data: response} = await request().get(BY_ID + `${productId}`)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },
    
        getByRefId: async function(refId) {
            try {
                const response = await request().get(REF_ID,refId)
                return response.data
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getVariations: async function(productId) {
            try {
                const { data: response} = await request().get(VARIATIONS + productId)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getByCategoryId: async function(categoryId, from=1, to=10) {
            const url = `${BY_CATEGORY_ID}categoryId=${categoryId}&_from=${from}&to=${to}`
            try {
                const { data: response} = await request().get(url)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getReviewRate: async function(productId) {
            try {
                const { data: response} = await request().get(REVIEW_RATE + productId)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getSpecification: async function(productId) {
            const url = `${SPECIFICATION}/${productId}/specification`
            try {
                const { data: response} = await request().get(url)
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

        insertEspecification: async function(productId, {FieldId, FieldValueId=null, Text=null}) {
            try {
                const url = `${CREATE}/${productId}/specification`
                const { data: response } = await request().post(url, {FieldId, FieldValueId, Text})
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        updateSpecification: async function(productId, {Value, id, Name}) {
            try {
                const url = `${UPDATE_SPECIFICATION}/${productId}/specification`
                const { data: response } = await request().post(url, {Value, id, Name})
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        }
    }
}

module.exports = product