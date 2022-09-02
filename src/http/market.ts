import BaseHTTPClient from "./base";
import { IMarket } from "../response/market";
import { ICity } from "../response/city";

export default class MarketHTTPClient extends BaseHTTPClient {
    get(market: string, path: string): Promise<IMarket> {
        return new Promise<IMarket>((resolve, reject) => {
            const response = this.makeCall<null>(market, path);
            response
                .then((d: any) => {
                    const cities: ICity[] = d?.map((city: any) => {
                        const temp = {
                            id: city.locode,
                        };
                        Object.keys(city).forEach((key) => {
                            if (key !== "locode") {
                                Object.assign(temp, { [key]: city[key] });
                            }
                        });
                        return temp;
                    });

                    const iMarket: IMarket = {
                        id: market,
                        cities,
                    };

                    resolve(iMarket);
                })
                .catch(MarketHTTPClient.errorHandler(reject));
        });
    }
}
