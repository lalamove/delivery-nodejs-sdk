import { PriceBreakdown } from "../models/priceBreakdown";
import { Stop } from "../models/stop";
import QuotationPayload from "../payload/quotationPayload";

export default class Quotation {
    id: string;

    scheduleAt: Date;

    serviceType: string;

    specialRequests: string[];

    expiresAt: Date;

    priceBreakdown: PriceBreakdown;

    isRouteOptimized: boolean;

    stops: Stop[];

    constructor(
        id: string,
        scheduleAt: Date,
        serviceType: string,
        specialRequests: string[],
        expiresAt: Date,
        priceBreakdown: PriceBreakdown,
        isRouteOptimized: boolean,
        stops: Stop[]
    ) {
        // dummy info
        this.id = id;
        this.scheduleAt = scheduleAt;
        this.serviceType = serviceType;
        this.specialRequests = specialRequests;
        this.expiresAt = expiresAt;
        this.priceBreakdown = priceBreakdown;
        this.isRouteOptimized = isRouteOptimized;
        this.stops = stops;
    }
}
