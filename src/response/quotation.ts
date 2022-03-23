import { PriceBreakdown } from "../models/priceBreakdown";
import { Stop } from "../models/stop";

export interface IQuotation {
    id: string;
    scheduleAt: Date;
    serviceType: string;
    specialRequests: string[];
    expiresAt: Date;
    priceBreakdown: PriceBreakdown;
    isRouteOptimized: boolean;
    stops: Stop[];
}
