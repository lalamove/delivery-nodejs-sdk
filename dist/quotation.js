"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Quotation {
    constructor() {
        //dummy info
        this.id = "ID";
        this.scheduleAt = new Date();
        this.serviceType = "Service Type";
        this.specialRequests = ["sp1", "sp2"];
        this.expiresAt = new Date();
        this.priceBreakdown = {
            base: "15",
            extraMileage: "13",
            surcharge: "14",
            totalBeforeOptimization: "16",
            totalExcludePriorityFee: "14",
            currency: "HKD",
            total: "14"
        };
        this.isRouteOptimized = true;
        this.stops = [];
    }
    static create(quotationPayload) {
        return new Quotation();
    }
    static retrieve(id) {
        return new Quotation();
    }
    static isValid(id) {
        return true;
    }
}
exports.default = Quotation;
