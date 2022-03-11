import Base from "./base";
import { default as DriverResponse } from "./response/driver";

export default class Driver extends Base {
    retrieve(market: string, id: string, orderId: string): DriverResponse {
        return new DriverResponse();
    }
}
