import { IOrder } from "../response/order";
import BaseHTTPClient from "./base";
import OrderPayload from "../payload/orderPayload";
import PatchOrderPayload from "../payload/order/patchOrderPayload";

export default class OrderHTTPClient extends BaseHTTPClient {
    post(market: string, path: string, body: OrderPayload): Promise<IOrder> {
        return new Promise<IOrder>((resolve, reject) => {
            const response = this.makeCall<OrderPayload>(market, path, body, "POST");
            response
                .then((d: any) => {
                    const order = d;
                    order.id = order.orderId;
                    delete order.orderId;
                    resolve(<IOrder>(<unknown>order));
                })
                .catch((e) => {
                    reject(new Error(e.mapErrorMessage(e)));
                });
        });
    }

    get(market: string, path: string): Promise<IOrder> {
        return new Promise<IOrder>((resolve, reject) => {
            const response = this.makeCall<null>(market, path);
            response
                .then((d: any) => {
                    const order = d;
                    order.id = order.orderId;
                    delete order.orderId;
                    resolve(<IOrder>(<unknown>order));
                })
                .catch((e) => {
                    reject(new Error(e.mapErrorMessage(e)));
                });
        });
    }

    delete(market: string, path: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const response = this.makeCall<null>(market, path, null, "DELETE");
            response
                .then(() => {
                    resolve(true);
                })
                .catch((e) => {
                    reject(new Error(e.mapErrorMessage(e)));
                });
        });
    }

    post_priorityfee(market: string, path: string, priorityFee: object): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const response = this.makeCall<object>(market, path, priorityFee, "POST");
            response
                .then(() => {
                    resolve(true);
                })
                .catch((e) => {
                    reject(new Error(e.mapErrorMessage(e)));
                });
        });
    }

    patch(market: string, path: string, body: PatchOrderPayload): Promise<IOrder> {
        return new Promise<IOrder>((resolve, reject) => {
            const response = this.makeCall<PatchOrderPayload>(market, path, body, "PATCH");
            response
                .then((d: any) => {
                    const order = d;
                    order.id = order.orderId;
                    delete order.orderId;
                    resolve(<IOrder>(<unknown>order));
                })
                .catch((e) => {
                    reject(new Error(e.mapErrorMessage(e)));
                });
        });
    }
}
