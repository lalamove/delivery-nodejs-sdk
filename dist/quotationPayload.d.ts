import QuotationPayloadBuilder from "./quotationPayloadBuilder";
export default class QuotationPayload {
    private scheduleAt;
    private serviceType;
    private specialRequests?;
    private language;
    private stops;
    private isRouteOptimized?;
    private item?;
    constructor(qpb: QuotationPayloadBuilder);
}
