const SDKClient = require("delivery-nodejs-sdk");

function placeQuotation() {
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

const main = async () => {
    const sdKClient = new SDKClient.ClientModule(
        new SDKClient.Config(
            "2b5ab9e54f8cd1ff3a02823456ab6ac3",
            "6pVLO8zjywjbSiOe7v4KvPh5LX64Kxn0BHO5VHwF6XIkDln0a2n/JqFBtsd38OBn",
            "sandbox"
        )
    );

    const quotationPayload = placeQuotation();

    try {
        const res = await sdKClient.Quotation.create("HK", quotationPayload);
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(res, null, 4));
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log("Ops... something went wrong. ", e.message);
    }
};

main();
