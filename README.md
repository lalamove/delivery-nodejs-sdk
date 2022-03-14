# Lalamove's Delivery SDK

# Prerequisites:

1. NodeJs
2. NPM

To install the dependencies and build the SDK run `make build`

---

# Usage

## Initialize SDK Client

You can specify the environment in a config object `SDKClient.Config`. By default it will initialize client for `sandbox` env. To use it for production just pass `production` string.

```
    const SDKClient = require("delivery-nodejs-sdk");

    const sdKClient = new SDKClient.ClientModule(
        new SDKClient.Config(
            "public_key",
            "secret_key",
            "sandbox"
        )
    );
```

---

## Quotation

`sdKClient.Quotation`

### Create quotation

To create new quotation for your order call

`sdKClient.Quotation.create(market: string, quotationPayload: QuotationPayload): Promise<IQuotation>;`

function.

You can import `SDKClient.QuotationPayloadBuilder`, a helper function that will allow you to build the payload needed for Quotation in easy manner.

#### Request

```
    const co = {
        lat: "22.3353139",
        lng: "114.1758402",
    };

    const co2 = {
        lat: "22.3203648",
        lng: "114.169773",
    };

    const stop1 = {
        coordinates: co,
        address: "Wu Kai Sha Road",
    };

    const stop2 = {
        coordinates: co2,
        address: "Wu Kai Sha Road",
    };

    const quotationPayload = SDKClient.QuotationPayloadBuilder.quotationPayload()
        .withLanguage("en_HK")
        .withServiceType("COURIER")
        .withStops([stop1, stop2])
        .build();


    await sdKClient.Quotation.create("HK", quotationPayload);
```

#### Response

Promise of 

```
IQuotation {
    id: string;
    scheduleAt: Date;
    serviceType: string;
    specialRequests: string[];
    expiresAt: Date;
    priceBreakdown: PriceBreakdown;
    isRouteOptimized: boolean;
    stops: Stop[];
}
```

### Retrieve quotation

---

## Order

### Create order

### Retrieve order

### Add priority fee

### Cancel order

## Driver

### Retrieve driver

### Change driver

## Market

### Retrieve market

## City

### Retrieve city
