import https from "https";
import Config from "../config";
import signRequest from "../auth";

export default class BaseHTTPClient {
    private http = https;

    private config;

    constructor(config: Config) {
        this.config = config;
    }

    async makeCall<ResultType>(
        market: string,
        path: string,
        body?: Array<object>,
        method: string = "GET"
    ): Promise<ResultType> {
        return new Promise<ResultType>((resolve: any, reject: any) => {
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
                        `{"data": ${JSON.stringify(body)}}`
                    )}`,
                    Market: market,
                },
            };

            const request = https.request(options, (res: any) => {
                if (res.statusCode > 299) {
                    // eslint-disable-next-line no-console
                    console.error(
                        `Did not get a success response from the server. Code: ${res.statusCode}, Resp ${res}`
                    );
                    res.resume();
                    return;
                }

                let data = "";

                res.on("data", (chunk: any) => {
                    data += chunk;
                });

                res.on("close", () => {
                    resolve(data);
                });
            });

            if (method !== "GET") {
                request.write(`{"data": ${JSON.stringify(body)}}`);
            }

            request.end();

            request.on("error", (err: { message: any }) => {
                // eslint-disable-next-line no-console
                console.error(`Encountered an error trying to make a request: ${err.message}`);
                reject(err);
            });
        });
    }
}
