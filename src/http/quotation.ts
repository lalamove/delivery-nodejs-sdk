import Quotation from "../response/quotation";
import BaseHTTPClient from "./base";
import QuotationPayload from "../payload/quotationPayload";
import {QuotationDto} from "../response/quotationDto"

export default class QuotationHTTPClient extends BaseHTTPClient {
    async create(market: string, path: string, body: QuotationPayload): Promise<Quotation | Error> {
        const response = await this.makeCall<QuotationDto, QuotationPayload>(
            market,
            path,
            body,
            "POST"
        );

        if (JSON.parse(response.toString()).data != undefined) {
            return JSON.parse(response.toString()).data;
        }
        return JSON.parse(response.toString()).errors;
    }
}
