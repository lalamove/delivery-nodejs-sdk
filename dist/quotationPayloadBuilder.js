"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quotationPayload_1 = __importDefault(require("./quotationPayload"));
class QuotationPayloadBuilder {
    static quotationPayload() {
        return new QuotationPayloadBuilder();
    }
    withScheduleAt(scheduleAt) {
        this.scheduleAt = scheduleAt;
        return this;
    }
    withServiceType(serviceType) {
        this.serviceType = serviceType;
        return this;
    }
    withSpecialRequests(specialRequests) {
        this.specialRequests = specialRequests;
        return this;
    }
    withLanguage(language) {
        this.language = language;
        return this;
    }
    withStops(stops) {
        this.stops = stops;
        return this;
    }
    withIsRouteOptimized(isRouteOptimized) {
        this.isRouteOptimized = isRouteOptimized;
        return this;
    }
    withItem(item) {
        this.item = item;
        return this;
    }
    build() {
        return new quotationPayload_1.default(this);
    }
}
exports.default = QuotationPayloadBuilder;
