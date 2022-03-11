const delivery_sdk = require("delivery-nodejs-sdk");

const config = new Config{
    key: "ddd"
}

class Quotation {
    public place(params: QuotationPyaload): QuotationResponse {
        return httpClient.makeCall<QuotationResponse, QuotationPyaload>(params)
    }
}

class QuotationPyaload{}
class QuotationResponse{}

class SDKCLient {
    public Quotation: Quotation // class michal
    public Order: Order // karebn
    public Driver: Driver
    protected Config: Config

    constructor(config: Config) {
        this.config = config
        this.Quotation = new Quotation(config);
        this.Order = new Order(config)
    }
}

const traveloka = new SDKClient(config)

quot =  new quotationPayloadBuilder().withSMS(tyrue) // quotationPayload

// 1 option
traveloka.Quotation.
traveloka.Quotation.place("TW", quotationPayload) // Quotation object. not promise
traveloka.Order.get("HK", id)
traveloka.Driver.get(market, id)



// new stop = 322332

SDKClient.quotationRequest().then((r) => console.log(r));

let client = new delivery_sdk.
