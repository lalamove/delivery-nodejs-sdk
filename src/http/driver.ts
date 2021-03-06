import { IDriver } from "../response/driver";
import BaseHTTPClient from "./base";

export default class DriverHTTPClient extends BaseHTTPClient {
    get(market: string, path: string): Promise<IDriver> {
        return new Promise<IDriver>((resolve, reject) => {
            const response = this.makeCall<null>(market, path);
            response
                .then((d) => {
                    resolve(<IDriver>(<unknown>d));
                })
                .catch((e) => {
                    reject(new Error(e.mapErrorMessage(e)));
                });
        });
    }

    delete(market: string, path: string, reason: object): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const response = this.makeCall<object>(market, path, reason, "DELETE");
            response
                .then(() => {
                    resolve(true);
                })
                .catch((e) => {
                    reject(new Error(e.mapErrorMessage(e)));
                });
        });
    }

}
