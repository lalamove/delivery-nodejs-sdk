import { PriceBreakdown } from "../models/priceBreakdown";
import { Stop } from "../models/stop";
import OrderPayload from "../payload/orderPayload";
import { Measurement } from "../models/measurement";

export default class Order {
    id: string;

    quotationId: string;

    priceBreakdown: PriceBreakdown;

    driverId: string;

    shareLink: string;

    status: string;

    distance: Measurement;

    stops: Stop[];

    constructor() {
        // dummy info
        this.id = "ID";
        this.quotationId = "QuotationID";
        this.driverId = "DriverID";
        this.shareLink = "ShareLink";
        this.status = "Status";
        this.priceBreakdown = {
            currency: "HKD",
            total: "14",
        };
        this.distance = {
            unit: "m",
            value: "155",
        };
        this.stops = [];
    }

    static create(orderPayload: OrderPayload): Order {
        return new Order();
    }

    static retrieve(id: string): Order {
        return new Order();
    }

    static addPriorityFee(id: string, priorityFee: string): Order {
        return new Order();
    }

    static changeDriver(id: string, reason: string): Order {
        return new Order();
    }

    static cancel(id: string): Order {
        return new Order();
    }
}
