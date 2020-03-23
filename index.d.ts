
import Client from './index'

export interface IClient {
    accountName: string,
    appKey?: string,
    appToken?: string,
    autToken?: string,
    environment: string
}
export interface IImages {
    ImageUrl: string,
    IMageName: string,
    FileId: number
}

export interface IDimesion {
    cubicweight: number,
    height: number,
    length: number,
    weight: number,
    width: number
}

export interface IRealDimension {
    realCubicWeight: number,
    realHeight: number,
    realLength: number,
    realWeight: number,
    realWidth: number
}

export interface ISku {
    id: number,
    ProductId: number,
    ProductRefId: number,
    NameComplete: string,
    ProductName: string,
    ProductDescription: string,
    TaxCode: string,
    SkuName: string,
    IsActive: boolean,
    IsTransported: boolean,
    IsInventoried: boolean,
    IsGiftCardRecharge: boolean,
    ImageUrl: string,
    DetailUrl: string,
    CSCIdentification: string,
    BrandId: number,
    BrandName: string,
    Dimension: IDimesion,
    RealDimension: IRealDimension,
    ManufacturerCode: string,
    IsKit: boolean,
    KitItems: Array<object>,
    Services: Array<object>,
    Categories: Array<object>,
    Attachments: Array<object>,
    Collections: Array<object>,
    SkuSellers: Array<object>,
    SellerId: number,
    StockKeepingUnitId: number,
    SellerStockKeepingUnitId: number,
    IsActive: boolean,
    isFilter: boolean,
    FreightCommissionPercentage: number,
    ProductCommissionPercentage: number,
    SalesChannels: number,
    Images: IImages,
    Videoes: Array<any>,
    SkuSpecifications: Array<any>,
    ProductSpecifications: Array<any>,
    ProductClustersIds: string,
    ProductCategoryIds: string,
    ProductGlobalCategoryId: number,
    ProductCategories: object,
    CommercialConditionId: number,
    RewardValue: number,
    AlternateIds: object,
    AlternateIdValues: Array<string>,
    EstimatedDateArrival: string,
    MeasurementUnit: string,
    UnitMultiplier: number,
    InformationSource: string,
    ModalType: string,
    KeyWords: string,
    ReleaseDate: string
}

declare const Client: Client;

export default Client;
declare function Client(client: IClient): void;
declare function getSkus(): Promise<Array<number>>
declare function getSkusByRefId(refs: Array<any>): Promise<Array<any>>
declare function getSkuById(id: string): Promise<ISku>