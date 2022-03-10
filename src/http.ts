import { signRequest } from "./auth";
import Config from "./config";
import https from "https";
import Quotation from "./quotation";
import QuotationPayload from "./payload/quotationPayload";

export default class httpClient {
    private http: any;

    private cfg: Config;

    constructor(cfg: Config, client: any) {
        this.http = client;
        this.cfg = cfg;
    }

    async makeCall<ResultType, PayloadType>(
        path: string,
        body?: PayloadType,
        method: string = "GET"
    ): Promise<ResultType> {
        return new Promise<ResultType>((resolve: any, reject: any) => {
            const options = {
                host: "sg-api-stg.lalamove.com",
                path,
                method,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json; charset=UTF-8",
                    Authorization: `hmac ${this.cfg.publicKey}:${new Date()
                        .getTime()
                        .toString()}:${signRequest(
                        this.cfg,
                        method,
                        path,
                        `{"data": ${JSON.stringify(body)}}`
                    )}`,
                    Market: "HK",
                },
            };

            const request = https.request(options, (res: any) => {
                // if (res.statusCode !== 201) {
                //     // eslint-disable-next-line no-console
                //     console.error(
                //         `Did not get a Created from the server. Code: ${
                //             res.statusCode
                //         }, Resp ${res.}`
                //     );
                //     res.resume();
                //     return;
                // }

                let data = "";

                res.on("data", (chunk: any) => {
                    data += chunk;
                });

                res.on("close", () => {
                    // eslint-disable-next-line no-console
                    // console.log(JSON.parse(data));
                    resolve(new Quotation(JSON.parse(data)));
                });
            });

            request.write(`{"data": ${JSON.stringify(body)}}`);

            request.end();

            request.on("error", (err: { message: any }) => {
                // eslint-disable-next-line no-console
                console.error(`Encountered an error trying to make a request: ${err.message}`);
                reject(err);
            });
        });
    }
}
