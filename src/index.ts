import Config from "./config";

export function orderRequest(): string {
    const config = new Config("PublicKey", "PrivateKey", "Production");
    return config.env;
}

export function cancelOrder(id: number): string {
    return `Cancelled Order with ID: ${id}`;
}
