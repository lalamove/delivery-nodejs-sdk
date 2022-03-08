"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuotationPayload {
    constructor(qpb) {
        if (qpb.scheduleAt === undefined) {
            throw new Error("ScheduleAt cannot be empty");
        }
        if (qpb.serviceType === undefined) {
            throw new Error("Service Type cannot be empty");
        }
        if (qpb.stops === undefined) {
            throw new Error("Stops cannot be empty");
        }
        this.scheduleAt = qpb.scheduleAt;
        this.serviceType = qpb.serviceType;
        this.language = qpb.language;
        this.specialRequests = qpb.specialRequests;
        this.stops = qpb.stops;
        this.isRouteOptimized = qpb.isRouteOptimized;
        this.item = qpb.item;
    }
}
exports.default = QuotationPayload;
