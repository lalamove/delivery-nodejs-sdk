"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelOrder = exports.orderRequest = void 0;
function orderRequest() {
    return "Made Order";
}
exports.orderRequest = orderRequest;
function cancelOrder(id) {
    return "Cancelled Order with ID: " + id;
}
exports.cancelOrder = cancelOrder;
exports.default = { orderRequest, cancelOrder };
