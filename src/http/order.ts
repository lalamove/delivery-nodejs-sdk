import { IOrder } from "../response/order";
import BaseHTTPClient from "./base";
import OrderPayload from "../payload/orderPayload";

export default class OrderHTTPClient extends BaseHTTPClient {
    post(market: string, path: string, body: OrderPayload): Promise<IOrder> {
        return new Promise<IOrder>((resolve, reject) => {
            const response = this.makeCall<OrderPayload>(market, path, body, "POST");
            response
                .then((d) => {
                    const order: IOrder = <IOrder>(<unknown>d);
                    resolve(order);
                })
                .catch((e) => {
                    reject(e);
                });
        });
    }

    get(market: string, path: string): Promise<IOrder> {
        return new Promise<IOrder>((resolve, reject) => {
            const response = this.makeCall<null>(market, path);
            response
                .then((d) => {
                    const order: IOrder = <IOrder>(<unknown>d);
                    resolve(order);
                })
                .catch((e) => {
                    reject(e);
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
                    reject(e);
                });
        });
    }
}
