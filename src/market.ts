import Base from "./base";
import { default as MarketResponse } from "./response/market";

export default class Market extends Base {
    retrieve(market: string, id: string): MarketResponse {
        return new MarketResponse(id, []);
    }
}
