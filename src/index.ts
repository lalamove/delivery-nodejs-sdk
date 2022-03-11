import Config from "./config";
// import QuotationPayloadBuilder from "./payload/quotationPayloadBuilder";
// import Quotation from "./response/quotation";

export { default as ClientModule } from "./client";
// export * as Config from "./config";
export { default as Config } from "./config";

export { default as QuotationPayloadBuilder} from "./payload/quotationPayloadBuilder"
export function orderRequest(): string {
    const config = new Config("PublicKey", "PrivateKey", "Production");
    return config.env;
}

export function cancelOrder(id: number): string {
    return `Cancelled Order with ID: ${id}`;
}

// export function quotationRequest(): Quotation {
//     const quotationPayload = new QuotationPayloadBuilder().withLanguage("English").build();
//     const quotaion = new Quotation(quotationPayload);
//     return quotaion;
// }
