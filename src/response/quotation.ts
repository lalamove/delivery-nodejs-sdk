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

    static create(quotationPayload: QuotationPayload): Quotation {
        let makeQuotation = () => {
            return new Quotation(
                "ID",
                new Date(),
                "MOTO",
                ["sp1", "sp2"],
                new Date(),
                { total: "12", currency: "HKD" },
                true,
                []
            );
        };

        return makeQuotation();
    }

    static retrieve(id: string): Quotation {
        let getQuotationById = (id: string) => {
            return new Quotation(
                id,
                new Date(),
                "MOTO",
                ["sp1", "sp2"],
                new Date(),
                { total: "12", currency: "HKD" },
                true,
                []
            );
        };
        return getQuotationById(id);
    }

    static isValid(id: string): boolean {
        let getQuotationById = (id: string) => {
            return new Quotation(
                id,
                new Date(),
                "MOTO",
                ["sp1", "sp2"],
                new Date(),
                { total: "12", currency: "HKD" },
                true,
                []
            );
        };
        let quotation = getQuotationById(id);
        if (quotation.expiresAt.getTime() < new Date().getTime()) {
            return true;
        }
        return false;
    }
}
