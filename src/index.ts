import https from "https";
import Config from "./config";
import QuotationPayloadBuilder from "./payload/quotationPayloadBuilder";
import Quotation from "./quotation";
import HttpClient from "./http";
import QuotationPayload from "./payload/quotationPayload";
import { Stop } from "./models/stop";
import { Coordinates } from "./models/coordinates";
// import { Contact } from "./models/contact";

export function orderRequest(): string {
    const config = new Config("PublicKey", "PrivateKey", "Production");
    return config.env;
}

export function cancelOrder(id: number): string {
    return `Cancelled Order with ID: ${id}`;
}

export async function quotationRequest(): Promise<Quotation> {
    const co: Coordinates = {
        lat: "22.3353139",
        lng: "114.1758402",
    };

    const co2: Coordinates = {
        lat: "22.3203648",
        lng: "114.169773",
    };

    // const contact: Contact = {
    //     name: "test",
    //     phone: "93031007",
    // };

    const stop1: Stop = {
        // id: "",
        coordinates: co,
        address: "x",
        // contact,
    };

    const stop2: Stop = {
        // id: "",
        coordinates: co2,
        address: "x",
        // contact,
    };

    const quotationPayload = QuotationPayloadBuilder.quotationPayload()
        .withLanguage("en_HK")
        // .withScheduleAt(new Date())
        .withServiceType("COURIER")
        .withStops([stop1, stop2])
        .build();

    const client = new HttpClient(
        new Config(
            "accb779492b04ff78f602b57577a6d82",
            "m4njoumtmwIFWrbfK5UkemOWHQWh1MgZQpBtrHVm9FtD1LkeCN/ty1iMWKintfUt"
        ),
        https
    );

    const q = await client.makeCall<Quotation, QuotationPayload>(
        "/v3/quotations",
        quotationPayload,
        "POST"
    );
    return q;
}
