"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SKU = {
    SKU_IDS: '/catalog_system/pvt/sku/stockkeepingunitids',
    BY_REF: '/catalog_system/pub/sku/stockkeepingunitidsbyrefids',
    BY_ID: '/catalog_system/pvt/sku/stockkeepingunitbyid/',
    CREATE: '/catalog/pvt/stockkeepingunit',
    BY_EAN: '/catalog_system/pvt/sku/stockkeepingunitbyean/',
    BY_PRODUCT: '/catalog_system/pvt/sku/stockkeepingunitByProductId/',
    ATTACHMENTS: '/catalog_system/pvt/sku/associateattachments',
};
var PRODUCT = {
    BY_ID: '/catalog_system/pvt/products/ProductGet/',
    REF_ID: '/catalog_system/pvt/products/productgetbyrefid/',
    VARIATIONS: '/catalog_system/pub/products/variations/',
    BY_CATEGORY_ID: '/catalog_system/pvt/products/GetProductAndSkuIds?',
    REVIEW_RATE: '/addon/pvt/review/GetProductRate/',
    SPECIFICATION: '/catalog_system/pvt/product',
    CREATE: 'catalog/pvt/product',
    UPDATE_SPECIFICATION: '/catalog_system/pvt/products/'
};
var SPECIFICATION = {
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
};
exports.default = {
    SKU: SKU,
    SPECIFICATION: SPECIFICATION,
    PRODUCT: PRODUCT
};
