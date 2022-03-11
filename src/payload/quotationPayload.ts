import QuotationPayloadBuilder from "./quotationPayloadBuilder";
import { Stop } from "../models/stop";
import { Item } from "../models/item";

export default class QuotationPayload {
    private scheduleAt?: Date;

    private serviceType: string;

    private specialRequests?: string[];

    private language: string | undefined;

    private stops: Stop[];

    private isRouteOptimized?: boolean;

    private item?: Item;

    constructor(qpb: QuotationPayloadBuilder) {
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
