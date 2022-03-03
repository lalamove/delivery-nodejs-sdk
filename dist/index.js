"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelOrder = exports.orderRequest = void 0;
function orderRequest() {
    let config = new Config("PublicKey", "PrivateKey", "Production");
    return config.env;
}
exports.orderRequest = orderRequest;
function cancelOrder(id) {
    return `Cancelled Order with ID: ${id}`;
}
exports.cancelOrder = cancelOrder;
