// module.exports = {
//     SKU: '/catalog_system/pvt/sku/stockkeepingunitids',
//     SKU_BY_REF: '/catalog_system/pub/sku/stockkeepingunitidsbyrefids',
//     SKU_BY_ID: '/catalog_system/pvt/sku/stockkeepingunitbyid/',
//     SKU_CREATE: '/catalog/pvt/stockkeepingunit',
//     SKU_BY_EAN: '/catalog_system/pvt/sku/stockkeepingunitbyean/',
//     SKU_BY_PRODUCT: '/catalog_system/pvt/sku/stockkeepingunitByProductId/',
//     SKU_ATTACHMENTS: '/catalog_system/pvt/sku/associateattachments',
//     PRODUCT_BY_ID: '/catalog_system/pvt/products/ProductGet/',
//     PRODUCT_REF_ID: '/catalog_system/pvt/products/productgetbyrefid/',
//     PRODUCT_VARIATIONS: '/catalog_system/pub/products/variations/',
//     PRODUCT_BY_CATEGORY_ID: '/catalog_system/pvt/products/GetProductAndSkuIds?',
//     PRODUCT_REVIEW_RATE: '/addon/pvt/review/GetProductRate/',
//     PRODUCT_SPECIFICATION: '/catalog_system/pvt/products/',  
// }

const SKU = {
    SKU_IDS: '/catalog_system/pvt/sku/stockkeepingunitids',
    BY_REF: '/catalog_system/pub/sku/stockkeepingunitidsbyrefids',
    BY_ID: '/catalog_system/pvt/sku/stockkeepingunitbyid/',
    CREATE: '/catalog/pvt/stockkeepingunit',
    BY_EAN: '/catalog_system/pvt/sku/stockkeepingunitbyean/',
    BY_PRODUCT: '/catalog_system/pvt/sku/stockkeepingunitByProductId/',
    ATTACHMENTS: '/catalog_system/pvt/sku/associateattachments',
}

const PRODUCT = {
    BY_ID: '/catalog_system/pvt/products/ProductGet/',
    REF_ID: '/catalog_system/pvt/products/productgetbyrefid/',
    VARIATIONS: '/catalog_system/pub/products/variations/',
    BY_CATEGORY_ID: '/catalog_system/pvt/products/GetProductAndSkuIds?',
    REVIEW_RATE: '/addon/pvt/review/GetProductRate/',
    SPECIFICATION: '/catalog_system/pvt/product',
    CREATE: 'catalog/pvt/product',
    UPDATE_SPECIFICATION: '/catalog_system/pvt/products/'
}

const SPECIFICATION = {
    BY_CATEGORY_ID: '/catalog_system/pub/specification/field/listByCategoryId/',
    BY_TREE: '/catalog_system/pub/specification/field/listTreeByCategoryId/',
    BY_FIELD: '/catalog_system/pub/specification',
    BY_FIELD_VALUE: '/catalog_system/pvt/specification/fieldValue/',
    BY_GROUP: '/catalog_system/pub/specification',
    GROUP_BY_CATEGORY: '/catalog_system/pvt/specification/group',
    CREATE: '/catalog/pvt/specification',
    INSERT_VALUE: '/catalog/pvt/specificationvalue',
    INSERT_GROUP: '/catalog/pvt/specificationgroup',
    FIELD: '/catalog_system/pvt/specification/field',
    FIELD_VALUE: '/catalog_system/pvt/specification/fieldValue',
    GROUP: '/catalog_system/pvt/specification/group'
}

module.exports = { PRODUCT, SKU, SPECIFICATION }