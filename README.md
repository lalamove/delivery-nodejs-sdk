# Lalamove's Delivery SDK

---

# Usage

## Initialize SDK Client

You can specify the environment in a config object `SDKClient.Config`. By default it will initialize client for `sandbox` env. To use it for production just pass `production` string.

```
    const SDKClient = require("@lalamove/lalamove-js");

    const sdkClient = new SDKClient.ClientModule(
        new SDKClient.Config(
            "public_key",
            "secret_key",
            "sandbox"
        )
    );
```

---

## Quotation

`sdkClient.Quotation`

### Create quotation

To create new quotation for your order call

`sdkClient.Quotation.create(market: string, quotationPayload: QuotationPayload): Promise<IQuotation>;`

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


    await sdkClient.Quotation.create("HK", quotationPayload);
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
        .withMetadata({
            "internalId": "123123"
        })
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
    stops: StopWithContact[];
    metadata: object;
}
```

### Edit order

To edit an existing order

`sdKClient.Order.edit(market: string, orderId: string, patchOrderPayload: PatchOrderPayload): Promise<IOrder>;`

function.

You can import `SDKClient.PatchOrderPayloadBuilder`, a helper function that will allow you to build the payload needed for Order in easy manner.

```
const patchOrderPayload = SDKClient.PatchOrderPayloadBuilder.patchOrderPayload()
        .withStops([
            {
                coordinates: {
                lat: "22.3353139",
                lng: "114.1758402",
                },
                address: "Wu Kai Sha Road",
                name: "Michal",
                phone: "+85256847123",
            },
            {
                coordinates: {
                lat: "22.2827206",
                lng: "114.2123009",
                },
                address: "Quarry Bay, Hong Kong",
            },
            {
                coordinates: {
                lat: "22.3203648",
                lng: "114.169773",
                },
                address: "Wu Kai Sha Road",
                name: "Rustam",
                phone: "+85256847456",
            },
        ])
        .build();
```

#### Request

```
const order = await sdKClient.Order.edit("HK", order.id, payload);
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
    stops: StopWithContact[];
    metadata: object;
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
    stops: StopWithContact[];
    metadata: object;
}
```

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
    stops: StopWithContact[];
    metadata: object;
}
```

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
    stops: StopWithContact[];
    metadata: object;
}
```

## Driver

`sdkClient.Driver`

### Retrieve driver

To retrieve driver details for your order call

`sdkClient.Driver.retrieve(market, driverId, orderID)`

function.

You can get `driverId` from order details when a driver picks up the order. The resulting object that will be returned by the function above is as follows:

```
{
    "driverId": "93965",
    "name": "Driver's Name'",
    "phone": "+85210002001",
    "plateNumber": "**T-00*",
    "photo": "www.example.com/photo"
}

```

### Change driver

To change the driver for your order call

`sdkClient.Driver.cancel(market, driverId, orderID)`

function.

You can get `driverId` from order details when a driver picks up the order. The return value of the function above is as follows:

```
true 
```

## Market

A market is the location where Lalamove has launched its services. This SDK allows you to get all the service types in all cities in the specified market
### Retrieve market

To retrieve all cities with their corresponding service types in a specific market call

`sdkClient.Market.retrieve(market)`

## City

`sdkClient.City`

### Retrieve city

To retrieve service types for a specific city
`sdkClient.City.retrieve(market, id)`

The `id` param is a city identifier. You can see different city codes by calling `retrieve.Market`