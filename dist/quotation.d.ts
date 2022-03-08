import { PriceBreakdown } from "./models/priceBreakdown";
import { Stop } from "./models/stop";
import QuotationPayload from "./quotationPayload";
export default class Quotation {
    id: string;
    scheduleAt: Date;
    serviceType: string;
    specialRequests: string[];
    expiresAt: Date;
    priceBreakdown: PriceBreakdown;
    isRouteOptimized: boolean;
    stops: Stop[];
    private constructor();
    static create(quotationPayload: QuotationPayload): Quotation;
    static retrieve(id: string): Quotation;
    static isValid(id: string): boolean;
}
