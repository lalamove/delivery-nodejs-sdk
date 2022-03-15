import Base from "./base";
import { IDriver } from "./response/driver";
import DriverHTTPClient from "./http/driver";

export default class Driver extends Base {
    async retrieve(market: string, id: string, orderId: string): Promise<IDriver> {
        const httpClient = new DriverHTTPClient(this.config);
        const response = await httpClient.get(market, `/v3/orders/${orderId}/drivers/${id}`);
        return response;
    }

    async cancel(market: string, id: string, orderId: string, reason: string): Promise<boolean> {
        const httpClient = new DriverHTTPClient(this.config);
        await httpClient.delete(market, `/v3/orders/${orderId}/drivers/${id}`, { reason });
        return true;
    }
}
