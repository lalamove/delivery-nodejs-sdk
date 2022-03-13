import { IQuotation } from "../response/quotation";
import BaseHTTPClient from "./base";
import QuotationPayload from "../payload/quotationPayload";

export default class QuotationHTTPClient extends BaseHTTPClient {
    async create(market: string, path: string, body: QuotationPayload): Promise<IQuotation> {
        return new Promise<IQuotation>((resolve, reject) => {
            const response = this.makeCall<QuotationPayload>(market, path, body, "POST");
            response
                .then((d) => {
                    const quotation: IQuotation = <IQuotation>(<unknown>d);
                    resolve(quotation);
                })
                .catch((e) => {
                    reject(e);
                });
        });
    }
}
