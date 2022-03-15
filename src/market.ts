import Base from "./base";
import { IMarket } from "./response/market";
import MarketHTTPClient from "./http/market";

const marketsPath = "/v3/cities";

export default class Market extends Base {
    async retrieve(market: string): Promise<IMarket> {
        const httpClient = new MarketHTTPClient(this.config);
        const response = await httpClient.get(market, `${marketsPath}`);
        return response;
    }
}
