import { Contact } from "../models/contact";
import { IDriver } from "../response/driver";
import BaseHTTPClient from "./base";

export default class DriverHTTPClient extends BaseHTTPClient {
    private static toIDriver(resolve: any) {
        return (d: any) => {
            const driver = d;
            const contact: Contact = {
                name: driver.name,
                phone: driver.phone,
            };
            delete driver.name;
            delete driver.phone;
            driver.contact = contact;
            resolve(<IDriver>(<unknown>driver));
        };
    }

    get(market: string, path: string): Promise<IDriver> {
        return new Promise<IDriver>((resolve, reject) => {
            const response = this.makeCall<null>(market, path);
            response
                .then(DriverHTTPClient.toIDriver(resolve))
                .catch(DriverHTTPClient.errorHandler(reject));
        });
    }

    delete(market: string, path: string, reason: object): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const response = this.makeCall<object>(market, path, reason, "DELETE");
            response
                .then(() => {
                    resolve(true);
                })
                .catch(DriverHTTPClient.errorHandler(reject));
        });
    }
}
