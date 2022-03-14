import BaseHTTPClient from "./base";
import {IMarket} from "../response/market";
import ICity from "../response/city";

export default class CityHTTPClient extends BaseHTTPClient {
    get(market: string, id: string, path: string): Promise<ICity> {
        return new Promise<ICity>((resolve, reject) => {
            const response = this.makeCall<null>(market, path);
            response
                .then((d: any) => {
                    for (let i = 0; i < d.length; i++){
                        let curr = d[i];
                        curr.id = curr.locode;
                        delete curr.locode;
                        d[i] = curr;
                    }
                    const IMarket = {
                        id: market,
                        cities: d
                    };
                    let found = false;
                    for (let i = 0; i < IMarket.cities.length; i++){
                        let currCity = IMarket.cities[i];
                        if (currCity.id == id) {
                            resolve(<ICity>(<unknown>currCity))
                            found = true;
                        }
                    }
                    if (!found) {
                        throw new Error("No such city");
                    }

                })
                .catch((e) => {
                    reject(e);
                });
        });
    }
}
