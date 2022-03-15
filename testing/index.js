const SDKClient = require("delivery-nodejs-sdk");

function buildPlaceQuotation() {
    const co = {
        lat: "22.3353139",
        lng: "114.1758402",
    };

    const co2 = {
        lat: "22.3203648",
        lng: "-", // 114.169773
    };

    const stop1 = {
        coordinates: co,
        address: "x",
    };

    const stop2 = {
        coordinates: co2,
        address: "x",
    };

    const quotationPayload = SDKClient.QuotationPayloadBuilder.quotationPayload()
        .withLanguage("en_HK")
        .withServiceType("COURIER")
        .withStops([stop1, stop2])
        .build();
    return quotationPayload;
}

function buildPlaceOrder(quotation) {
    return SDKClient.OrderPayloadBuilder.orderPayload()
        .withIsPODEnabled(true)
        .withQuotationID(quotation.id)
        .withSender({
            stopId: quotation.stops[0].stopId,
            name: "aaa",
            phone: "+85256847364",
        })
        .withRecipients([
            {
                stopId: quotation.stops[1].stopId,
                name: "bbb",
                phone: "+85256847364",
            },
        ])
        .build();
}

const main = async () => {
    const sdKClient = new SDKClient.ClientModule(
        new SDKClient.Config(
            "2b5ab9e54f8cd1ff3a02823456ab6ac3",
            "6pVLO8zjywjbSiOe7v4KvPh5LX64Kxn0BHO5VHwF6XIkDln0a2n/JqFBtsd38OBn",
            "sandbox"
        )
    );

    try {
        // Create quotation

        const quotationPayload = buildPlaceQuotation();
        const quotation = await sdKClient.Quotation.create("HK", quotationPayload);

        // eslint-disable-next-line no-console
        console.log(JSON.stringify("=== CREATE QUOTATION ==="));
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(quotation, null, 4));

        // Get Quotation

        const quotDetail = await sdKClient.Quotation.retrieve("HK", quotation.id);
        // eslint-disable-next-line no-console
        console.log(JSON.stringify("=== GET QUOTATION DETAILS ==="));
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(quotDetail, null, 4));

        // Place order

        const orderPayload = buildPlaceOrder(quotation);

        const order = await sdKClient.Order.create("HK", orderPayload);
        // eslint-disable-next-line no-console
        console.log(JSON.stringify("=== PLACE ORDER ==="));
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(order, null, 4));

        // Get order

        const orderDetail = await sdKClient.Order.retrieve("HK", order.id);
        // eslint-disable-next-line no-console
        console.log(JSON.stringify("=== GET ORDER DETAIL ==="));
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(orderDetail, null, 4));

        // Add Priority Fee

        const priorityFeeStatus = await sdKClient.Order.addPriorityFee("HK", order.id, "15");
        const orderDetailWithPriorityFee = await sdKClient.Order.retrieve("HK", order.id);
        // eslint-disable-next-line no-console
        console.log(JSON.stringify("=== GET ORDER DETAILS WITH PRIORITY FEE ==="));
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(orderDetailWithPriorityFee, null, 4));

        // Get Driver detail

        // eslint-disable-next-line no-console
        console.log(JSON.stringify("=== GET Driver DETAIL ==="));
        try {
            const driverDetail = await sdKClient.Driver.retrieve("HK", "93965", "136970806262");
            // eslint-disable-next-line no-console
            console.log(JSON.stringify(driverDetail, null, 4));
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e.message);
        }

        // eslint-disable-next-line no-console
        console.log(JSON.stringify("=== Cancel Driver ==="));
        try {
            const status = await sdKClient.Driver.cancel("HK", "93965", "136970806262", "NO_NEED");
            // eslint-disable-next-line no-console
            console.log(JSON.stringify(status, null, 4));
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e.message);
        }

        // eslint-disable-next-line no-console
        console.log(JSON.stringify("=== GET Driver DETAIL After cancel==="));
        try {
            const driverDetail = await sdKClient.Driver.retrieve("HK", "93965", "136970806262");
            // eslint-disable-next-line no-console
            console.log(JSON.stringify(driverDetail, null, 4));
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e.message);
        }

        // Cancell order

        const orderCancelled = await sdKClient.Order.cancel("HK", order.id);
        // eslint-disable-next-line no-console
        console.log(JSON.stringify("=== CANCELL ORDER ==="));
        // eslint-disable-next-line no-console
        console.log(orderCancelled);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log("Ops... something went wrong. ", e.message);
    }
};

main();
