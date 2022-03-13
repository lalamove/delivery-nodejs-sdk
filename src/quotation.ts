import Base from "./base";
import { IQuotation } from "./response/quotation";
import QuotationPayload from "./payload/quotationPayload";
import QuotationHTTPClient from "./http/quotation";

export default class Quotation extends Base {
    async create(market: string, quotationPayload: QuotationPayload): Promise<IQuotation> {
        const httpClient = new QuotationHTTPClient(this.config);
        const response = await httpClient.create(market, "/v3/quotations", quotationPayload);
        return response;
    }
}
