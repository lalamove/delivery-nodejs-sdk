import Base from "./base";
import { IQuotation } from "./response/quotation";
import QuotationPayload from "./payload/quotationPayload";
import QuotationHTTPClient from "./http/quotation";

const quotaionsPath = "/v3/quotations";

export default class Quotation extends Base {
    async create(market: string, quotationPayload: QuotationPayload): Promise<IQuotation> {
        const httpClient = new QuotationHTTPClient(this.config);
        const response = await httpClient.create(market, quotaionsPath, quotationPayload);
        return response;
    }

    async retrieve(market: string, orderId: string): Promise<IQuotation> {
        const httpClient = new QuotationHTTPClient(this.config);
        const response = await httpClient.get(market, `${quotaionsPath}/${orderId}`);
        return response;
    }
}
