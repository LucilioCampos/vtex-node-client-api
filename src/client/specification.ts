import routes from './apiRoutes'

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
    GROUP
} = routes.SPECIFICATION

export interface ICreate {
    Id?: number,
    FieldTypeId: number,
    CategoryId: number,
    FieldGroupId: number,
    Name: string,
    Description: string,
    Position: number,
    IsFilter: boolean,
    IsRequired: boolean,
    IsOnProductDetails: boolean,
    IsStockKeepingUnit: boolean,
    IsActive: boolean,
    IsTopMenuLinkActive: boolean,
    IsSideMenuLinkActive: boolean,
    DefaultValue: string
}

export interface IValue {
    FieldId: number,
    Name: string,
    Text: string,
    IsActive: boolean,
    Position: number
}

export interface IGroup {
    Id?: number,
    CategoryId: number,
    Name: string,
    Position: number
}

export interface IField {
    Name: string
    CategoryId: number,
    FieldId: number,
    IsActive: boolean,
    IsRequired: boolean,
    FieldTypeId: number,
    FieldValueId: number,
    Description: string
    IsStockKeepingUnit: boolean,
    IsFilter: boolean,
    IsOnProductDetails: boolean,
    Position: number,
    IsWizard: boolean,
    IsTopMenuLinkActive: boolean,
    IsSideMenuLinkActive: boolean
    DefaultValue: string
    FieldGroupId: number,
    FieldGroupName: string
}

export interface IFieldValue {
    FieldValueId?: number,
    FieldId: number,
    Name: string,
    Text: string,
    IsActive: boolean,
    Position: number
}

/**
 * 
 * @param {AxiosInstance} request AxiosInstance with configured headers
 */
export default (request: any) => {
    return {
        /**
         * 
         * @param {Number} page select which page is requested
         * @param {Number} perPage select quantity per page
         */
        getByCategoryId: async function (categoryId: number): Promise<any> {
            try {
                const { data: response } = await request().get(BY_CATEGORY_ID + categoryId)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getTreeByCategoryId: async function (categoryId: number): Promise<any> {
            try {
                const response = await request().get(BY_TREE + categoryId)
                return response.data
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getByFieldId: async function (fieldId: number): Promise<any> {
            try {
                const { data: response } = await request().get(BY_FIELD + fieldId)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getByFieldValue: async function (fieldValueId: number): Promise<any> {
            try {
                const { data: response } = await request().get(BY_FIELD_VALUE + fieldValueId)
                return response
            } catch (err) {
                console.error(err);
                return err.message
            }
        },

        getByGroup: async function (groupId: number): Promise<any> {
            try {
                const { data: response } = await request().get(GROUP + groupId)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        listGroupByCategory: async function (categoryId: number): Promise<any> {
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
        create: async function (values: ICreate): Promise<ICreate> {
            try {
                const { data: response } = await request().post(CREATE, values)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        insertValue: async function (values: IValue): Promise<IValue> {
            try {
                const { data: response } = await request().post(INSERT_VALUE, values)
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
        insertGroup: async function (values: IGroup): Promise<IGroup> {
            try {
                const { data: response } = await request().post(INSERT_GROUP, values)
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
        createField: async function (values: IField): Promise<IField> {
            try {
                const { data: response } = await request().post(FIELD, values)
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
        createFieldValue: async function (values: IFieldValue): Promise<IFieldValue> {
            try {
                const { data: response } = await request().post(FIELD_VALUE, values)
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
        createGroup: async function (CategoryId: number, Name: string): Promise<IGroup> {
            try {
                const { data: response } = await request().post(GROUP, { CategoryId, Name })
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        updatedField: async function (values: IField): Promise<IField> {
            try {
                const { data: response } = await request().put(FIELD, values)
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
        updatedFieldValue: async function (values: IValue): Promise<IValue> {
            try {
                const { data: response } = await request().put(FIELD_VALUE, values)
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
        updateGroup: async function (Id: number, Name: string): Promise<IGroup> {
            try {
                const { data: response } = await request().put(GROUP, { Id, Name })
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },
    }
}