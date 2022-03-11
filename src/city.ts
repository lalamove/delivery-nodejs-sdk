import Config from "./config";
import { default as CityResponse } from "./response/city";
import Base from "./base";

export default class City extends Base {
    retrieve(market: string, id: string): CityResponse {
        return new CityResponse();
    }
}
