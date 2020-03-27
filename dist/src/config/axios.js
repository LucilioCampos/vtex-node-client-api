"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
exports.default = {
    requestByCredential: function (credentials) {
        var accountName = credentials.accountName, appKey = credentials.appKey, appToken = credentials.appToken, environment = credentials.environment;
        return axios_1.default.create({
            baseURL: "https://" + accountName + "." + environment + "/api",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VTEX-API-AppToken': appToken,
                'X-VTEX-API-AppKey': appKey
            }
        });
    },
    requestBySession: function (session) {
        var accountName = session.accountName, autToken = session.autToken, environment = session.environment;
        return axios_1.default.create({
            baseURL: "https://" + accountName + "." + environment + "/api",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'VtexIdclientAutCookie': autToken
            }
        });
    },
};
