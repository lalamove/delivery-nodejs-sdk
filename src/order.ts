import Base from "./base";
import { default as OrderResponse } from "./response/order";
import OrderPayload from "./payload/orderPayload";

export default class Order extends Base {
    static create(market: string, orderPayload: OrderPayload): OrderResponse {
        return new OrderResponse();
    }

    static retrieve(market: string, id: string): OrderResponse {
        return new OrderResponse();
    }

    addPriorityFee(market: string, id: string, priorityFee: string): OrderResponse {
        return new OrderResponse();
    }

    changeDriver(market: string, id: string, reason: string): OrderResponse {
        return new OrderResponse();
    }

    cancel(market: string, id: string): OrderResponse {
        return new OrderResponse();
    }
}
