import Base from "./base";
import { IOrder } from "./response/order";
import OrderPayload from "./payload/orderPayload";
import OrderHTTPClient from "./http/order";
import PatchOrderPayload from "./payload/order/patchOrderPayload";

const orderPath = "/v3/orders";

export default class Order extends Base {
    async create(market: string, orderPayload: OrderPayload): Promise<IOrder> {
        const httpClient = new OrderHTTPClient(this.config);
        const response = await httpClient.post(market, orderPath, orderPayload);
        return response;
    }

    async edit(
        market: string,
        orderId: string,
        patchOrderPayload: PatchOrderPayload
    ): Promise<IOrder> {
        const httpClient = new OrderHTTPClient(this.config);
        const response = await httpClient.patch(
            market,
            `${orderPath}/${orderId}`,
            patchOrderPayload
        );
        return response;
    }

    async retrieve(market: string, orderId: string): Promise<IOrder> {
        const httpClient = new OrderHTTPClient(this.config);
        const response = await httpClient.get(market, `${orderPath}/${orderId}`);
        return response;
    }

    async cancel(market: string, orderId: string): Promise<boolean> {
        const httpClient = new OrderHTTPClient(this.config);
        await httpClient.delete(market, `${orderPath}/${orderId}`);
        return true;
    }

    async addPriorityFee(market: string, orderId: string, fee: string): Promise<boolean> {
        const httpClient = new OrderHTTPClient(this.config);
        await httpClient.post_priorityfee(market, `${orderPath}/${orderId}/priority-fee`, {
            priorityFee: fee,
        });
        return true;
    }
}
