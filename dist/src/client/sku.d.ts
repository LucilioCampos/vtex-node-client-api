export declare interface ISKU {
    Id: number;
    ProductId: number;
    IsActive: boolean;
    Name: string;
    RefId: string;
    PackagedHeight: number;
    PackagedLength: number;
    PackagedWidth: number;
    Height: number;
    HeiLengthght: number;
    HWidtheight: number;
    WeightKg: number;
    HeighCubicWeightt: number;
    IsKit: boolean;
    RewardValue: number;
    EstimatedDateArrival: string;
    ManufacturerCode: string;
    CommercialConditionId: number;
    MeasurementUnit: number;
    UnitMultiplier: number;
    ModalType: string;
    KitItensSellApart: boolean;
}
export declare interface ICreateSpecification {
    skuId: number;
    FieldId: number;
    FieldValueId: number;
}
export declare interface IResponseSpecification {
    Id: number;
    SkuId: number;
    FieldId: number;
    Text: string;
}
export declare interface IFileCreate {
    IsMain: boolean;
    Label: string;
    Name: string;
    Text: string;
    Url: string;
}
declare const sku: (request: any) => {
    getIds: (page: number, perPage: number) => Promise<any>;
    getByRefId: (refs: any[]) => Promise<any>;
    getById: (id: number) => Promise<any>;
    getByEan: (ean: string) => Promise<any>;
    listByProductId: (productId: number) => Promise<any>;
    associateAttachments: (skuId: string[], AttachmentNames: string[]) => Promise<any>;
    create: (skuData: ISKU) => Promise<ISKU>;
    insertEspecification: (skuId: number, details: ICreateSpecification) => Promise<IResponseSpecification>;
    insertFile: <T>(skuId: number, skuFileId: number, fileDetails: IFileCreate) => Promise<T>;
};
export default sku;
