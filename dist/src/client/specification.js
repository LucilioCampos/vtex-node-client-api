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
var _a = apiRoutes_1.default.SPECIFICATION, BY_CATEGORY_ID = _a.BY_CATEGORY_ID, BY_TREE = _a.BY_TREE, BY_FIELD = _a.BY_FIELD, BY_FIELD_VALUE = _a.BY_FIELD_VALUE, GROUP_BY_CATEGORY = _a.GROUP_BY_CATEGORY, CREATE = _a.CREATE, INSERT_VALUE = _a.INSERT_VALUE, INSERT_GROUP = _a.INSERT_GROUP, FIELD = _a.FIELD, FIELD_VALUE = _a.FIELD_VALUE, GROUP = _a.GROUP;
/**
 *
 * @param {AxiosInstance} request AxiosInstance with configured headers
 */
exports.default = (function (request) {
    return {
        /**
         *
         * @param {Number} page select which page is requested
         * @param {Number} perPage select quantity per page
         */
        getByCategoryId: function (categoryId) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().get(BY_CATEGORY_ID + categoryId)];
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
        getTreeByCategoryId: function (categoryId) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().get(BY_TREE + categoryId)];
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
        getByFieldId: function (fieldId) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().get(BY_FIELD + fieldId)];
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
        getByFieldValue: function (fieldValueId) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().get(BY_FIELD_VALUE + fieldValueId)];
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
        getByGroup: function (groupId) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().get(GROUP + groupId)];
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
        listGroupByCategory: function (categoryId) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().get(GROUP_BY_CATEGORY + categoryId)];
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
        /**
         *
         * @param {Object} body teste
         */
        create: function (values) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_7;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().post(CREATE, values)];
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
        insertValue: function (values) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_8;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().post(INSERT_VALUE, values)];
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
        /**
         *
         * @param {Number} CategoryId Category reference to create a group
         * @param {String} Name Name of Group
         * @param {Number} Position The current Specification Group’s position in comparison to the others
         */
        insertGroup: function (values) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_9;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().post(INSERT_GROUP, values)];
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
        },
        /**
         *
         * @param {Object} body object with params required to create a new Field
         */
        createField: function (values) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_10;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().post(FIELD, values)];
                        case 1:
                            response = (_a.sent()).data;
                            return [2 /*return*/, response];
                        case 2:
                            err_10 = _a.sent();
                            console.error(err_10);
                            return [2 /*return*/, err_10.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        /**
         *
         * @param {Number} FieldId Specification Field Id *required
         * @param {String} Name Specification Field Value Name *required
         * @param {String} Text Specification Field Value Description *required
         * @param {Boolean} IsActive If the Specification Field Value is active *required
         * @param {Number} Position Specification Field Value Position *required
         */
        createFieldValue: function (values) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_11;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().post(FIELD_VALUE, values)];
                        case 1:
                            response = (_a.sent()).data;
                            return [2 /*return*/, response];
                        case 2:
                            err_11 = _a.sent();
                            console.error(err_11);
                            return [2 /*return*/, err_11.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        /**
         *
         * @param {Number} CategoryId Category ID *required
         * @param {String} Name Specification Group Name *required
         */
        createGroup: function (CategoryId, Name) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_12;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().post(GROUP, { CategoryId: CategoryId, Name: Name })];
                        case 1:
                            response = (_a.sent()).data;
                            return [2 /*return*/, response];
                        case 2:
                            err_12 = _a.sent();
                            console.error(err_12);
                            return [2 /*return*/, err_12.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        updatedField: function (values) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_13;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().put(FIELD, values)];
                        case 1:
                            response = (_a.sent()).data;
                            return [2 /*return*/, response];
                        case 2:
                            err_13 = _a.sent();
                            console.error(err_13);
                            return [2 /*return*/, err_13.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        /**
        *
        * @param {Number} FieldId Specification Field Id *required
        * @param {String} Name Specification Field Value Name *required
        * @param {String} Text Specification Field Value Description *required
        * @param {Boolean} IsActive If the Specification Field Value is active *required
        * @param {Number} Position Specification Field Value Position *required
        */
        updatedFieldValue: function (values) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_14;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().put(FIELD_VALUE, values)];
                        case 1:
                            response = (_a.sent()).data;
                            return [2 /*return*/, response];
                        case 2:
                            err_14 = _a.sent();
                            console.error(err_14);
                            return [2 /*return*/, err_14.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        /**
         *
         * @param {Number} Id Specification Group ID *required
         * @param {String} Name Specification Group Name *required
         */
        updateGroup: function (Id, Name) {
            return __awaiter(this, void 0, void 0, function () {
                var response, err_15;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, request().put(GROUP, { Id: Id, Name: Name })];
                        case 1:
                            response = (_a.sent()).data;
                            return [2 /*return*/, response];
                        case 2:
                            err_15 = _a.sent();
                            console.error(err_15);
                            return [2 /*return*/, err_15.message];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
    };
});
