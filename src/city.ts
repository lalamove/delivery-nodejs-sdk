import { ICity } from "./response/city";
import Base from "./base";
import CityHTTPClient from "./http/city";

const marketsPath = "/v3/cities";

export default class City extends Base {
    async retrieve(market: string, id: string): Promise<ICity> {
        const httpClient = new CityHTTPClient(this.config);
        const response = await httpClient.get(market, id, `${marketsPath}`);
        return response;
    }
}
