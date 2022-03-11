import Quotation from "../response/quotation";
import BaseHTTPClient from "./base";
import QuotationPayload from "../payload/quotationPayload";

export default class QuotationHTTPClient extends BaseHTTPClient {
    async create(market: string, path: string, body: QuotationPayload): Promise<Quotation> {
        const response = await this.makeCall<Quotation, QuotationPayload>(
            market,
            path,
            body,
            "POST"
        );

        return response;
    }
}
