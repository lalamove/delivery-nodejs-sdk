import { IQuotation } from "../response/quotation";
import BaseHTTPClient from "./base";
import QuotationPayload from "../payload/quotationPayload";
import APIError from "../error";

export default class QuotationHTTPClient extends BaseHTTPClient {
    create(market: string, path: string, body: QuotationPayload): Promise<IQuotation> {
        return new Promise<IQuotation>((resolve, reject) => {
            const response = this.makeCall<QuotationPayload>(market, path, body, "POST");
            response
                .then((d: any) => {
                    const q = d;
                    q.id = q.quotationId;
                    delete q.quotationId;
                    resolve(<IQuotation>(<unknown>q));
                })
                .catch((e) => {
                    if (e instanceof APIError) {
                        if (e.httpStatus === 422) {
                            reject(new Error(e.getError()));

                            return;
                        }
                    }
                    reject(e);
                });
        });
    }

    get(market: string, path: string): Promise<IQuotation> {
        return new Promise<IQuotation>((resolve, reject) => {
            const response = this.makeCall<null>(market, path);
            response
                .then((d: any) => {
                    const q = d;
                    q.id = q.quotationId;
                    delete q.quotationId;
                    resolve(<IQuotation>(<unknown>q));
                })
                .catch((e) => {
                    reject(e);
                });
        });
    }
}
