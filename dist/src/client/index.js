"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("../config/axios"));
var requestByCredential = axios_1.default.requestByCredential, requestBySession = axios_1.default.requestBySession;
var sku_1 = __importDefault(require("./sku"));
var specification_1 = __importDefault(require("./specification"));
function Client(client) {
    var accountName = client.accountName, appKey = client.appKey, appToken = client.appToken, environment = client.environment, autToken = client.autToken;
    var request = function () {
        if (autToken) {
            return requestBySession({ accountName: accountName, autToken: autToken, environment: environment });
        }
        return requestByCredential({ accountName: accountName, appKey: appKey, appToken: appToken, environment: environment });
    };
    var skus = sku_1.default(request);
    var specifications = specification_1.default(request);
    return { skus: skus, specifications: specifications };
}
exports.default = Client;
;
