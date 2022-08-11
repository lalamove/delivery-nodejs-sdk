import { IOrder } from "../response/order";
import BaseHTTPClient from "./base";
import OrderPayload from "../payload/orderPayload";
import PatchOrderPayload from "../payload/order/patchOrderPayload";
import { Contact } from "../models/contact";

export default class OrderHTTPClient extends BaseHTTPClient {
    private static toIOrder(resolve: any) {
        return (d: any) => {
            const order = d;
            order.id = order.orderId;
            delete order.orderId;
            order.stops?.forEach((stopData: any) => {
                const stop = stopData;
                const contact: Contact = {
                    name: stopData.name,
                    phone: stopData.phone,
                };
                delete stop.name;
                delete stop.phone;
                stop.contact = contact;
            });
            resolve(<IOrder>(<unknown>order));
        };
    }

    post(market: string, path: string, body: OrderPayload): Promise<IOrder> {
        return new Promise<IOrder>((resolve, reject) => {
            const response = this.makeCall<OrderPayload>(market, path, body, "POST");
            response
                .then(OrderHTTPClient.toIOrder(resolve))
                .catch(OrderHTTPClient.errorHandler(reject));
        });
    }

    get(market: string, path: string): Promise<IOrder> {
        return new Promise<IOrder>((resolve, reject) => {
            const response = this.makeCall<null>(market, path);
            response
                .then(OrderHTTPClient.toIOrder(resolve))
                .catch(OrderHTTPClient.errorHandler(reject));
        });
    }

    delete(market: string, path: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const response = this.makeCall<null>(market, path, null, "DELETE");
            response
                .then(() => {
                    resolve(true);
                })
                .catch(OrderHTTPClient.errorHandler(reject));
        });
    }

    post_priorityfee(market: string, path: string, priorityFee: object): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const response = this.makeCall<object>(market, path, priorityFee, "POST");
            response
                .then(() => {
                    resolve(true);
                })
                .catch(OrderHTTPClient.errorHandler(reject));
        });
    }

    patch(market: string, path: string, body: PatchOrderPayload): Promise<IOrder> {
        return new Promise<IOrder>((resolve, reject) => {
            const response = this.makeCall<PatchOrderPayload>(market, path, body, "PATCH");
            response
                .then(OrderHTTPClient.toIOrder(resolve))
                .catch(OrderHTTPClient.errorHandler(reject));
        });
    }
}
