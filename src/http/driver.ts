import { IDriver } from "../response/driver";
import BaseHTTPClient from "./base";
import { Contact } from "../models/contact";

export default class DriverHTTPClient extends BaseHTTPClient {
    private static toIDriver(resolve: any) {
        return (d: any) => {
            const driver = d;
            driver.id = driver.driverId;
            const contact: Contact = {
                name: driver.name,
                phone: driver.phone,
            };
            driver.updatedAt = driver?.coordinates?.updatedAt;
            if (driver.updatedAt) {
                driver.updatedAt = new Date(driver.updatedAt);
            }
            delete driver.name;
            delete driver.phone;
            delete driver.driverId;
            delete driver?.coordinates?.updatedAt;
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
