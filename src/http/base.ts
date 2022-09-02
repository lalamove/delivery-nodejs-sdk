import https from "https";
import Config from "../config";
import signRequest from "../auth";
import APIError from "../error";
import { defineCallerModule } from "./util";

const { version } = require("../../package.json");

export default class BaseHTTPClient {
    private config;

    constructor(config: Config) {
        this.config = config;
    }

    protected static errorHandler(reject: any) {
        return (error: Error | APIError) => {
            if (error instanceof APIError) {
                reject(new Error(APIError.mapErrorMessage(error)));
            } else {
                reject(error);
            }
        };
    }

    protected makeCall<PayloadType>(
        market: string,
        path: string,
        body?: PayloadType,
        method: "GET" | "POST" | "PATCH" | "DELETE" = "GET"
    ): Promise<JSON> {
        return new Promise<JSON>((resolve, reject) => {
            let nodeVersion = "not defined";

            if (typeof process !== "undefined") {
                nodeVersion = process.version;
            }

            const timestamp = Date.now();

            const options: https.RequestOptions = {
                host: this.config.host,
                path,
                method,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json; charset=UTF-8",
                    "SDK-Type": "nodejs",
                    "SDK-Version": version,
                    "SDK-Language-Version": nodeVersion,
                    Authorization: `hmac ${
                        this.config.publicKey
                    }:${timestamp.toString()}:${signRequest(
                        this.config,
                        method,
                        path,
                        timestamp,
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
