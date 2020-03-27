import axios from '../config/axios';

const { requestByCredential, requestBySession } = axios

import sku, { 
    ISKU, 
    ICreateSpecification, 
    IResponseSpecification, 
    IFileCreate 
} from './sku'

declare interface IClient {
    accountName: string,
    appKey: string,
    appToken: string,
    autToken: string,
    environment: string
}

interface ClientInstance {
    skus: {
        getIds(page: number, perPage: number): Promise<any>
        getByRefId(refs: any[]): Promise<any>
        getById(id: number): Promise<any>
        getByEan(ean: string): Promise<any>
        listByProductId(productId: number): Promise<any>
        associateAttachments(skuId: string[], AttachmentNames: string[]): Promise<any>
        create(skuData: ISKU): Promise<ISKU>
        insertEspecification(skuId: number, details: ICreateSpecification): Promise<IResponseSpecification>
        insertFile<T>(skuId: number, skuFileId: number, details: IFileCreate): Promise<T>
    }
}

export default function Client(client: IClient): ClientInstance {
    const { accountName, appKey, appToken, environment, autToken } = client
    const request = function() {
        if (autToken) {
            return requestBySession({accountName, autToken, environment})
        }
        return requestByCredential({accountName, appKey, appToken, environment})
    }
    const skus = sku(request)

    
    return { skus }
};
