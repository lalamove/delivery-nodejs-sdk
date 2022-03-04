"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelOrder = exports.orderRequest = void 0;
const config_1 = require("./config");
function orderRequest() {
    let config = new config_1.Config('PublicKey', 'PrivateKey', 'Production');
    return config.env;
}
exports.orderRequest = orderRequest;
function cancelOrder(id) {
    return `Cancelled Order with ID: ${id}`;
}
exports.cancelOrder = cancelOrder;
