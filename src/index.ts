import Config from "./config";
import QuotationPayloadBuilder from "./payload/quotationPayloadBuilder";
import Quotation from "./response/quotation";
import Client from "./client";
export Client;
export function orderRequest(): string {
    const config = new Config("PublicKey", "PrivateKey", "Production");
    return config.env;
}

export function cancelOrder(id: number): string a{
    return `Cancelled Order with ID: ${id}`;
}

export function quotationRequest(): Quotation {
    let quotationPayload = QuotationPaationPayload()
        .withLanguage("English")
        .build();
    let quotaion = Quotation.create(quotationPayload);
    return quotaion;
}


