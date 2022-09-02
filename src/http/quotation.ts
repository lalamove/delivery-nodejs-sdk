import { IQuotation } from "../response/quotation";
import BaseHTTPClient from "./base";
import QuotationPayload from "../payload/quotationPayload";

export default class QuotationHTTPClient extends BaseHTTPClient {
    private static toIQuotation(resolve: any) {
        return (d: any) => {
            const quotation = d;
            quotation.id = quotation.quotationId;
            delete quotation.quotationId;
            quotation.stops?.forEach((stopData: any) => {
                const stop = stopData;
                stop.id = stop.stopId;
                delete stop.stopId;
            });
            resolve(<IQuotation>(<unknown>quotation));
        };
    }

    create(market: string, path: string, body: QuotationPayload): Promise<IQuotation> {
        return new Promise<IQuotation>((resolve, reject) => {
            const response = this.makeCall<QuotationPayload>(market, path, body, "POST");
            response
                .then(QuotationHTTPClient.toIQuotation(resolve))
                .catch(QuotationHTTPClient.errorHandler(reject));
        });
    }

    get(market: string, path: string): Promise<IQuotation> {
        return new Promise<IQuotation>((resolve, reject) => {
            const response = this.makeCall<null>(market, path);
            response
                .then(QuotationHTTPClient.toIQuotation(resolve))
                .catch(QuotationHTTPClient.errorHandler(reject));
        });
    }
}
