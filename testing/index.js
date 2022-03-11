// import Config from "delivery-nodejs-sdk/config";
// import SDKClient from "delivery-nodejs-sdk";
// import QuotationPayload from "delivery-nodejs-sdk/payload/quotationPayload";

// const Config = require("delivery-nodejs-sdk/config");
const SDKClient = require("delivery-nodejs-sdk");
// const QuotationPayload = require("delivery-nodejs-sdk/payload/quotationPayload");

const main = () => {
    const sdKClient = new SDKClient.ClientModule(
        new SDKClient.Config(
            "2b5ab9e54f8cd1ff3a02823456ab6ac3",
            "6pVLO8zjywjbSiOe7v4KvPh5LX64Kxn0BHO5VHwF6XIkDln0a2n/JqFBtsd38OBn",
            "SANDBOX"
        )
    );

    const res = sdKClient.Quotation.create("HK", SDKClient.QuotationPayload());
    res.then((x) => console.log(JSON.stringify(x, null, 3))).catch((x) =>
        console.log(JSON.stringify(x, null, 3))
    );
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
