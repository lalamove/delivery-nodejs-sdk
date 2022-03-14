import { Stop } from "../models/stop";
import { Item } from "../models/item";
import QuotationPayload from "./quotationPayload";

export default class QuotationPayloadBuilder {
    scheduleAt?: Date | undefined;

    serviceType: string | undefined;

    specialRequests?: string[];

    language?: string;

    stops: Stop[] | undefined;

    isRouteOptimized?: boolean;

    item?: Item;

    static quotationPayload(): QuotationPayloadBuilder {
        return new QuotationPayloadBuilder();
    }

    withScheduleAt(scheduleAt: Date): QuotationPayloadBuilder {
        this.scheduleAt = scheduleAt;
        return this;
    }

    withServiceType(serviceType: string): QuotationPayloadBuilder {
        this.serviceType = serviceType;
        return this;
    }

    withSpecialRequests(specialRequests: string[]): QuotationPayloadBuilder {
        this.specialRequests = specialRequests;
        return this;
    }

    withLanguage(language: string): QuotationPayloadBuilder {
        this.language = language;
        return this;
    }

    withStops(stops: Stop[]): QuotationPayloadBuilder {
        this.stops = stops;
        return this;
    }

    withIsRouteOptimized(isRouteOptimized: boolean): QuotationPayloadBuilder {
        this.isRouteOptimized = isRouteOptimized;
        return this;
    }

    withItem(item: Item): QuotationPayloadBuilder {
        this.item = item;
        return this;
    }

    build(): QuotationPayload {
        return new QuotationPayload(this);
    }
}
