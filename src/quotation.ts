import { PriceBreakdown } from "./models/priceBreakdown";
import { Stop } from "./models/stop";
import QuotationPayload from "./payload/quotationPayload";

export default class Quotation {
    id: string;

    scheduleAt: Date;

    serviceType: string;

    specialRequests: string[];

    expiresAt: Date;

    priceBreakdown: PriceBreakdown;

    isRouteOptimized: boolean;

    stops: Stop[];

    private constructor() {
        // dummy info
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
            total: "14",
        };
        this.isRouteOptimized = true;
        this.stops = [];
    }

    static create(quotationPayload: QuotationPayload): Quotation {
        return new Quotation();
    }

    static retrieve(id: string): Quotation {
        return new Quotation();
    }

    static isValid(id: string): boolean {
        return true;
    }
}
