import https from "https";
import Config from "../config";
import signRequest from "../auth";
import APIError from "../error";
import { defineCallerModule } from "./util";

export default class BaseHTTPClient {
    private http = https;

    private config;

    constructor(config: Config) {
        this.config = config;
    }

    protected makeCall<PayloadType>(
        market: string,
        path: string,
        body?: PayloadType,
        method: string = "GET"
    ): Promise<JSON> {
        return new Promise<JSON>((resolve, reject) => {
            const options = {
                host: this.config.host,
                path,
                method,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json; charset=UTF-8",
                    Authorization: `hmac ${this.config.publicKey}:${new Date()
                        .getTime()
                        .toString()}:${signRequest(
                        this.config,
                        method,
                        path,
                        body ? `{"data": ${JSON.stringify(body)}}` : undefined
                    )}`,
                    Market: market,
                },
            };
            const request = https.request(options, (res: any) => {
                let data = "";

                res.on("data", (chunk: any) => {
                    data += chunk;
                });

                res.on("close", () => {
                    if (res.statusCode > 299) {
                        reject(
                            new APIError(
                                defineCallerModule(path, method),
                                res.statusCode,
                                data,
                                `Something went wrong with your request.`
                            )
                        );
                        return;
                    }

                    if (data.length === 0) {
                        resolve(JSON.parse("{}"));
                        return;
                    }
                    resolve(JSON.parse(data).data);
                });
            });

            if (body) {
                request.useChunkedEncodingByDefault = true;
                request.write(`{"data": ${JSON.stringify(body)}}`);
            }

            request.end();

            request.on("error", (err: { message: any }) => {
                // eslint-disable-next-line no-console
                console.error(`Encountered an error trying to make a request: ${err.message}`);
                reject(new APIError(defineCallerModule(path, method), 0, "", err.message));
            });
        });
    }
}
