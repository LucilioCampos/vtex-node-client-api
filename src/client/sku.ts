import apiRoutes from './apiRoutes'

export declare interface ISKU {
    Id: number,
    ProductId: number,
    IsActive: boolean,
    Name: string,
    RefId: string,
    PackagedHeight: number,
    PackagedLength: number,
    PackagedWidth: number,
    Height: number,
    HeiLengthght: number,
    HWidtheight: number,
    WeightKg: number,
    HeighCubicWeightt: number,
    IsKit: boolean,
    RewardValue: number,
    EstimatedDateArrival: string,
    ManufacturerCode: string,
    CommercialConditionId: number,
    MeasurementUnit: number,
    UnitMultiplier: number,
    ModalType: string,
    KitItensSellApart: boolean
}

export declare interface ICreateSpecification {
    skuId: number,
    FieldId: number,
    FieldValueId: number
}

export declare interface IResponseSpecification {
    Id: number,
    SkuId: number,
    FieldId: number,
    Text: string
}

export declare interface IFileCreate {
    IsMain: boolean,
    Label: string,
    Name: string,
    Text: string,
    Url: string
}

const {
    SKU_IDS,
    BY_REF,
    BY_ID,
    CREATE,
    BY_EAN,
    BY_PRODUCT,
    ATTACHMENTS
} = apiRoutes.SKU

const sku = (request: any) => {
    return {
        getIds: async function(page: number, perPage: number) {
            try {
                const {data: response} = await request().get(SKU_IDS + `?page=${page}&pagesize=${perPage}`)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },
    
        getByRefId: async function(refs: any[]) {
            try {
                const response = await request().post(BY_REF, refs)
                return response.data
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getById: async function(id: number): Promise<any> {
            try {
                const { data: response} = await request().get(BY_ID + id)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        getByEan: async function(ean: string): Promise<any> {
            try {
                const { data: response} = await request().get(BY_EAN + ean)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        listByProductId: async function(productId: number): Promise<any> {
            try {
                const { data: response} = await request().get(BY_PRODUCT + productId)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        associateAttachments: async function(skuId: Array<string>, AttachmentNames: Array<string>): Promise<any> {
            try {
                const { data: response} = await request().post(ATTACHMENTS, {skuId, AttachmentNames})
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        create: async function(skuData: ISKU): Promise<ISKU> {
            try {
                const { data: response } = await request().post(CREATE, skuData)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        insertEspecification: async function(skuId: number, details: ICreateSpecification): Promise<IResponseSpecification> {
            try {
                const url = `${CREATE}/${skuId}/specification`
                const { data: response } = await request().post(url, details)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        },

        insertFile: async function<T>(skuId: number, skuFileId: number, fileDetails: IFileCreate): Promise<T> {
            try {
                const url = `${CREATE}/${skuId}/file/${skuFileId}`
                const { data: response } = await request().post(url, fileDetails)
                return response
            } catch (err) {
                console.error(err)
                return err.message
            }
        }
    }
}

export default sku