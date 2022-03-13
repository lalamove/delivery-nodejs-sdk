import Base from "./base";
import { IOrder } from "./response/order";
import OrderPayload from "./payload/orderPayload";
import OrderHTTPClient from "./http/order";

export default class Order extends Base {
    async create(market: string, orderPayload: OrderPayload): Promise<IOrder> {
        const httpClient = new OrderHTTPClient(this.config);
        const response = await httpClient.post(market, "/v3/orders", orderPayload);
        return response;
    }

    async retrieve(market: string, orderId: string): Promise<IOrder> {
        const httpClient = new OrderHTTPClient(this.config);
        const response = await httpClient.get(market, `/v3/orders/${orderId}`);
        return response;
    }

    async cancel(market: string, orderId: string): Promise<boolean> {
        const httpClient = new OrderHTTPClient(this.config);
        await httpClient.delete(market, `/v3/orders/${orderId}`);
        return true;
    }
}
