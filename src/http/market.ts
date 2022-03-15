import BaseHTTPClient from "./base";
import {IMarket} from "../response/market";

export default class MarketHTTPClient extends BaseHTTPClient {
    get(market: string, path: string): Promise<IMarket> {
        return new Promise<IMarket>((resolve, reject) => {
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

                    resolve(<IMarket>(<unknown>IMarket));
                })
                .catch((e) => {
                    reject(e);
                });
        });
    }
}
