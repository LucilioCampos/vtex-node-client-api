import { ISKU, ICreateSpecification, IResponseSpecification, IFileCreate } from './sku';
import { ICreate, IValue, IGroup, IField, IFieldValue } from './specification';
declare interface IClient {
    accountName: string;
    appKey: string;
    appToken: string;
    autToken: string;
    environment: string;
}
interface ClientInstance {
    skus: {
        getIds(page: number, perPage: number): Promise<any>;
        getByRefId(refs: any[]): Promise<any>;
        getById(id: number): Promise<any>;
        getByEan(ean: string): Promise<any>;
        listByProductId(productId: number): Promise<any>;
        associateAttachments(skuId: string[], AttachmentNames: string[]): Promise<any>;
        create(skuData: ISKU): Promise<ISKU>;
        insertEspecification(skuId: number, details: ICreateSpecification): Promise<IResponseSpecification>;
        insertFile<T>(skuId: number, skuFileId: number, details: IFileCreate): Promise<T>;
    };
    specifications: {
        getByCategoryId(categoryId: number): Promise<any>;
        getTreeByCategoryId(categoryId: number): Promise<any>;
        getByFieldId(fieldId: number): Promise<any>;
        getByFieldValue(fieldValueId: number): Promise<any>;
        getByGroup(groupId: number): Promise<any>;
        listGroupByCategory(categoryId: number): Promise<any>;
        create(values: ICreate): Promise<ICreate>;
        insertValue(values: IValue): Promise<IValue>;
        insertGroup(values: IGroup): Promise<IGroup>;
        createField(values: IField): Promise<IField>;
        createFieldValue(values: IFieldValue): Promise<IFieldValue>;
        createGroup(CategoryId: number, Name: string): Promise<IGroup>;
        updatedField(values: IField): Promise<IField>;
        updatedFieldValue(values: IValue): Promise<IValue>;
        updateGroup(Id: number, Name: string): Promise<IGroup>;
    };
}
export default function Client(client: IClient): ClientInstance;
export {};
