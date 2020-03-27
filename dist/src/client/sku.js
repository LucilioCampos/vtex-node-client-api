"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apiRoutes_1 = __importDefault(require("./apiRoutes"));
var _a = apiRoutes_1.default.SKU, SKU_IDS = _a.SKU_IDS, BY_REF = _a.BY_REF, BY_ID = _a.BY_ID, CREATE = _a.CREATE, BY_EAN = _a.BY_EAN, BY_PRODUCT = _a.BY_PRODUCT, ATTACHMENTS = _a.ATTACHMENTS;
var sku = function (request) {
    return {
        getIds: function (page, perPage) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().get(SKU_IDS + ("?page=" + page + "&pagesize=" + perPage))];
                        case 1:
                            response = (_a.sent()).data;
                            return [2 /*return*/, response];
                        case 2:
                            err_1 = _a.sent();
                            console.error(err_1);
                            return [2 /*return*/, err_1.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        getByRefId: function (refs) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().post(BY_REF, refs)];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/, response.data];
                        case 2:
                            err_2 = _a.sent();
                            console.error(err_2);
                            return [2 /*return*/, err_2.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        getById: function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().get(BY_ID + id)];
                        case 1:
                            response = (_a.sent()).data;
                            return [2 /*return*/, response];
                        case 2:
                            err_3 = _a.sent();
                            console.error(err_3);
                            return [2 /*return*/, err_3.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        getByEan: function (ean) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().get(BY_EAN + ean)];
                        case 1:
                            response = (_a.sent()).data;
                            return [2 /*return*/, response];
                        case 2:
                            err_4 = _a.sent();
                            console.error(err_4);
                            return [2 /*return*/, err_4.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        listByProductId: function (productId) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().get(BY_PRODUCT + productId)];
                        case 1:
                            response = (_a.sent()).data;
                            return [2 /*return*/, response];
                        case 2:
                            err_5 = _a.sent();
                            console.error(err_5);
                            return [2 /*return*/, err_5.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        associateAttachments: function (skuId, AttachmentNames) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().post(ATTACHMENTS, { skuId: skuId, AttachmentNames: AttachmentNames })];
                        case 1:
                            response = (_a.sent()).data;
                            return [2 /*return*/, response];
                        case 2:
                            err_6 = _a.sent();
                            console.error(err_6);
                            return [2 /*return*/, err_6.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        create: function (skuData) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_7;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().post(CREATE, skuData)];
                        case 1:
                            response = (_a.sent()).data;
                            return [2 /*return*/, response];
                        case 2:
                            err_7 = _a.sent();
                            console.error(err_7);
                            return [2 /*return*/, err_7.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        insertEspecification: function (skuId, details) {
            return __awaiter(this, void 0, void 0, function () {
                var url, response, err_8;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            url = CREATE + "/" + skuId + "/specification";
                            return [4 /*yield*/, request().post(url, details)];
                        case 1:
                            response = (_a.sent()).data;
                            return [2 /*return*/, response];
                        case 2:
                            err_8 = _a.sent();
                            console.error(err_8);
                            return [2 /*return*/, err_8.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        insertFile: function (skuId, skuFileId, fileDetails) {
            return __awaiter(this, void 0, void 0, function () {
                var url, response, err_9;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            url = CREATE + "/" + skuId + "/file/" + skuFileId;
                            return [4 /*yield*/, request().post(url, fileDetails)];
                        case 1:
                            response = (_a.sent()).data;
                            return [2 /*return*/, response];
                        case 2:
                            err_9 = _a.sent();
                            console.error(err_9);
                            return [2 /*return*/, err_9.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
    };
};
exports.default = sku;