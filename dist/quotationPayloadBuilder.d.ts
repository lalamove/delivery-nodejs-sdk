import { Stop } from "./models/stop";
import { Item } from "./models/item";
import QuotationPayload from "./quotationPayload";
export default class QuotationPayloadBuilder {
    scheduleAt: string | undefined;
    serviceType: string | undefined;
    specialRequests?: string[];
    language?: string;
    stops: Stop[] | undefined;
    isRouteOptimized?: boolean;
    item?: Item;
    static quotationPayload(): QuotationPayloadBuilder;
    withScheduleAt(scheduleAt: string): QuotationPayloadBuilder;
    withServiceType(serviceType: string): QuotationPayloadBuilder;
    withSpecialRequests(specialRequests: string[]): QuotationPayloadBuilder;
    withLanguage(language: string): QuotationPayloadBuilder;
    withStops(stops: Stop[]): QuotationPayloadBuilder;
    withIsRouteOptimized(isRouteOptimized: boolean): QuotationPayloadBuilder;
    withItem(item: Item): QuotationPayloadBuilder;
    build(): QuotationPayload;
}
