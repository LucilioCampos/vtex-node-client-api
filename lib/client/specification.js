
const {
    BY_CATEGORY_ID,
    BY_TREE,
    BY_FIELD,
    BY_FIELD_VALUE,
    GROUP_BY_CATEGORY,
    CREATE,
    INSERT_VALUE,
    INSERT_GROUP,
    FIELD,
    FIELD_VALUE,
    CREATE_GROUP
} = require('./apiRoutes').SPECIFICATION

/**
 * 
 * @param {AxiosInstance} request AxiosInstance with configured headers
 */
const specification = (request) => {
    return {
        /**
         * 
         * @param {Number} page select which page is requested
         * @param {Number} perPage select quantity per page
         */
        getByCategoryId: async function (categoryId) {
            try {
                const { data: response } = await request().get(BY_CATEGORY_ID + categoryId)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getTreeByCategoryId: async function (categoryId) {
            try {
                const response = await request().get(BY_TREE + categoryId)
                return response.data
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getByFieldId: async function (fieldId) {
            try {
                const { data: response } = await request().get(BY_FIELD + fieldId)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getByFieldValue: async function (fieldValueId) {
            try {
                const { data: response } = await request().get(BY_FIELD_VALUE + fieldValueId)
                return response
            } catch (err) {
                console.error(err);
                return err.message
            }
        },

        getByGroup: async function (groupId) {
            try {
                const { data: response } = await request().get(BY_GROUP + groupId)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        listGroupByCategory: async function (categoryId) {
            try {
                const { data: response } = await request().get(GROUP_BY_CATEGORY + categoryId)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        /**
         * 
         * @param {Object} body teste
         */
        create: async function (body) {
            try {
                const { data: response } = await request().post(CREATE, body)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        insertValue: async function (body) {
            try {
                const { data: response } = await request().post(INSERT_VALUE, body)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        /**
         * 
         * @param {Number} CategoryId Category reference to create a group
         * @param {String} Name Name of Group
         * @param {Number} Position The current Specification Group’s position in comparison to the others
         */
        insertGroup: async function (CategoryId, Name, Position) {
            try {
                const { data: response } = await request().post(INSERT_GROUP, { CategoryId, Name, Position})
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        /**
         * 
         * @param {Object} body object with params required to create a new Field
         */
        createField: async function (body) {
            try {
                const { data: response } = await request().post(FIELD, body)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        /**
         * 
         * @param {Number} FieldId Specification Field Id *required
         * @param {String} Name Specification Field Value Name *required
         * @param {String} Text Specification Field Value Description *required
         * @param {Boolean} IsActive If the Specification Field Value is active *required
         * @param {Number} Position Specification Field Value Position *required
         */
        createFieldValue: async function (FieldId, Name, Text, IsActive, Position) {
            const body = {FieldId, Name, Text, IsActive, Position}
            try {
                const { data: response } = await request().post(FIELD_VALUE, body)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        /**
         * 
         * @param {Number} CategoryId Category ID *required
         * @param {String} Name Specification Group Name *required
         */
        createGroup: async function (CategoryId, Name) {
            try {
                const { data: response } = await request().post(GROUP, { CategoryId, Name})
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        updatedField: async function (body) {
            try {
                const { data: response } = await request().put(FIELD, body)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

         /**
         * 
         * @param {Number} FieldId Specification Field Id *required
         * @param {String} Name Specification Field Value Name *required
         * @param {String} Text Specification Field Value Description *required
         * @param {Boolean} IsActive If the Specification Field Value is active *required
         * @param {Number} Position Specification Field Value Position *required
         */
        updatedFieldValue: async function (FieldId, Name, Text, IsActive, Position) {
            const body = {FieldId, Name, Text, IsActive, Position}
            try {
                const { data: response } = await request().put(FIELD_VALUE, body)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        /**
         * 
         * @param {Number} Id Specification Group ID *required
         * @param {String} Name Specification Group Name *required
         */
        updateGroup: async function (Id, Name) {
            try {
                const { data: response } = await request().put(GROUP, {Id, Name})
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },
    }
}

module.exports = specification