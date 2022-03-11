// import Config from "delivery-nodejs-sdk/config";
// import SDKClient from "delivery-nodejs-sdk";
// import QuotationPayload from "delivery-nodejs-sdk/payload/quotationPayload";

// const Config = require("delivery-nodejs-sdk/config");
const SDKClient = require("delivery-nodejs-sdk");
// const QuotationPayload = require("delivery-nodejs-sdk/payload/quotationPayload");

const main = async () => {
    const sdKClient = new SDKClient.ClientModule(
        new SDKClient.Config(
            "2b5ab9e54f8cd1ff3a02823456ab6ac3",
            "6pVLO8zjywjbSiOe7v4KvPh5LX64Kxn0BHO5VHwF6XIkDln0a2n/JqFBtsd38OBn",
            "SANDBOX"
        )
    );


    const co = {
        lat: "22.3353139",
        lng: "114.1758402",
    };

    const co2 = {
        lat: "22.3203648",
        lng: "114.169773",
    };

    // const contact: Contact = {
    //     name: "test",
    //     phone: "93031007",
    // };

    const stop1 = {
        // id: "",
        coordinates: co,
        address: "x",
        // contact,
    };

    const stop2 = {
        // id: "",
        coordinates: co2,
        address: "x",
        // contact,
    };

    const quotationPayload = SDKClient.QuotationPayloadBuilder.quotationPayload()
        .withLanguage("en_HK")
        // .withScheduleAt(new Date())
        .withServiceType("COURIER")
        .withStops([stop1, stop2])
        .build();
    const res = await sdKClient.Quotation.create("HK", quotationPayload);
    console.log(typeof res);
    console.log(res);

    // res.then((x) => console.log(JSON.stringify(x, null, 3))).catch((x) =>
    //     console.log(JSON.stringify(x, null, 3))
    // );
};
main();

// const config = new Config("", "", "");

// // class Quotation {
// //     public place(params) {
// //         return httpClient.makeCall<QuotationResponse, QuotationPyaload>(params);
// //     }
// // }

// // interface QuotationPyaload {}
// // interface QuotationResponse {}

// class SDKClient {
//     // public Quotation; // class michal
//     // public Order; // karebn
//     // public Driver;
//     protected config;

//     constructor(config) {
//         this.config = config;
//         this.Quotation = new Quotation(config);
//         this.Order = new Order(config);
//     }
// }

// const traveloka = new SDKClient(config);

// quot = new quotationPayloadBuilder().withSMS(tyrue); // quotationPayload

// // 1 option
// traveloka.Quotation.traveloka.Quotation.place("TW", quotationPayload); // Quotation object. not promise
// traveloka.Order.get("HK", id);
// traveloka.Driver.get(market, id);

// // new stop = 322332

// SDKClient.quotationRequest().then((r) => console.log(r));

// // let client = new delivery_sdk.

// cancelOrder(123);

// QuotationHTTPClient.
