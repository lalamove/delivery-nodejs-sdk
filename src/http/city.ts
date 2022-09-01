import BaseHTTPClient from "./base";
import { ICity } from "../response/city";

export default class CityHTTPClient extends BaseHTTPClient {
    get(market: string, id: string, path: string): Promise<ICity> {
        return new Promise<ICity>((resolve, reject) => {
            const response = this.makeCall<null>(market, path);
            response
                .then((d: any) => {
                    const dt = d;
                    // eslint-disable-next-line no-plusplus
                    for (let i = 0; i < d.length; i++) {
                        const curr = dt[i];
                        curr.id = curr.locode;
                        delete curr.locode;
                        dt[i] = curr;
                    }
                    const IMarket = {
                        id: market,
                        cities: dt,
                    };
                    let found = false;
                    // eslint-disable-next-line no-plusplus
                    for (let i = 0; i < IMarket.cities.length; i++) {
                        const currCity = IMarket.cities[i];
                        if (currCity.id === id) {
                            resolve(<ICity>(<unknown>currCity));
                            found = true;
                        }
                    }
                    if (!found) {
                        throw new Error("No such city");
                    }
                })
                .catch(CityHTTPClient.errorHandler(reject));
        });
    }
}
