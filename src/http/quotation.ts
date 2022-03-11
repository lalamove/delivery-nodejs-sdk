import Quotation from "../response/quotation";
import BaseHTTPClient from "./base";

class QuotationHTTPClient extends BaseHTTPClient {
    constructor(parameters) {}

    async create(market: string, path: string, body: Array<object>): Quotation {
        try {
            const response = await this.makeCall<Quotation>(market, path, body, "POST");

            const q = response as Quotation;
            return q;
        } catch (e) {
            console.log(e);
        }
    }
}
