import Config from "./config";
import QuotationPayloadBuilder from "./payload/quotationPayloadBuilder";
import Quotation from "./quotation";

export function orderRequest(): string {
    const config = new Config("PublicKey", "PrivateKey", "Production");
    return config.env;
}

export function cancelOrder(id: number): string {
    return `Cancelled Order with ID: ${id}`;
}

export function quotationRequest(): Quotation {
    let quotationPayload = QuotationPayloadBuilder.quotationPayload()
        .withLanguage("English")
        .withScheduleAt("Hello")
        .build();
    let quotaion = Quotation.create(quotationPayload);
    return quotaion;
}
