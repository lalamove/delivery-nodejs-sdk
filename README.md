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

#### Request

```
const quotDetail = await sdKClient.Quotation.retrieve(market: string, quotationId: string);
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

---

## Order

`SDKCLient.Order`

### Create order

To place an new order

`sdKClient.Order.create(market: string, orderPayload: OrderPayload): Promise<IOrder>;`

function.

You can import `SDKClient.OrderPayloadBuilder`, a helper function that will allow you to build the payload needed for Order in easy manner.

```
const orderPayload = SDKClient.OrderPayloadBuilder.orderPayload()
        .withIsPODEnabled(true)
        .withQuotationID(quotation.id)
        .withSender({
            stopId: quotation.stops[0].stopId,
            name: "Michal",
            phone: "+85256847123",
        })
        .withRecipients([
            {
                stopId: quotation.stops[1].stopId,
                name: "Rustam",
                phone: "+85256847456",
            },
        ])
        .build();
```

#### Request

```
const order = await sdKClient.Order.create("HK", orderPayload);
```

#### Response

Promise of 

```
interface IOrder {
    id: string;
    quotationId: string;
    priceBreakdown: PriceBreakdown;
    driverId: string;
    shareLink: string;
    status: string;
    distance: Measurement;
    stops: Stop[];
}

```

### Retrieve order

#### Request

```
await sdKClient.Order.retrieve("HK", order.id);
```

#### Response

Promise of 

```
interface IOrder {
    id: string;
    quotationId: string;
    priceBreakdown: PriceBreakdown;
    driverId: string;
    shareLink: string;
    status: string;
    distance: Measurement;
    stops: Stop[];
}

### Add priority fee

#### Request

```
await sdKClient.Order.addPriorityFee("HK", order.id, "15")
```

#### Response

Promise of 

```
interface IOrder {
    id: string;
    quotationId: string;
    priceBreakdown: PriceBreakdown;
    driverId: string;
    shareLink: string;
    status: string;
    distance: Measurement;
    stops: Stop[];
}

### Cancel order

#### Request

```
await sdKClient.Order.cancel("HK", order.id);
```

#### Response

Promise of 

```
interface IOrder {
    id: string;
    quotationId: string;
    priceBreakdown: PriceBreakdown;
    driverId: string;
    shareLink: string;
    status: string;
    distance: Measurement;
    stops: Stop[];
}

## Driver

### Retrieve driver

### Change driver

## Market

### Retrieve market

## City

### Retrieve city
