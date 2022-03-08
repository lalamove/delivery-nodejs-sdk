"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quotationRequest = exports.cancelOrder = exports.orderRequest = void 0;
const config_1 = __importDefault(require("./config"));
const quotationPayloadBuilder_1 = __importDefault(require("./quotationPayloadBuilder"));
const quotation_1 = __importDefault(require("./quotation"));
function orderRequest() {
    const config = new config_1.default("PublicKey", "PrivateKey", "Production");
    return config.env;
}
exports.orderRequest = orderRequest;
function cancelOrder(id) {
    return `Cancelled Order with ID: ${id}`;
}
exports.cancelOrder = cancelOrder;
function quotationRequest() {
    let quotationPayload = quotationPayloadBuilder_1.default.quotationPayload().withLanguage("English").withScheduleAt("Hello").build();
    let quotaion = quotation_1.default.create(quotationPayload);
    console.log(quotaion);
    return quotaion;
}
exports.quotationRequest = quotationRequest;
