/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow
export const enum CallerModule {
    PostQuotation,
    GetQuotation,
    PostOrder,
    PatchOrder,
    GetOrder,
    CancellOrder,
    GetDriver,
    ChangeDriver,
    GetMarket,
    PostWebhook,
    AddPriorityFee,
}

export function defineCallerModule(path: string, method: string): CallerModule {
    if (method === "POST" && path === "/v3/quotations") {
        return CallerModule.PostQuotation;
    }

    if (method === "GET" && path.includes("/v3/quotations/")) {
        return CallerModule.GetQuotation;
    }

    if (method === "POST" && path === "/v3/orders") {
        return CallerModule.PostOrder;
    }

    if (method === "PATCH" && path.match(`/v3/order/(.*)$`)) {
        return CallerModule.PatchOrder;
    }

    if (method === "GET" && path.match(`/v3/order/(.*)$`)) {
        return CallerModule.GetOrder;
    }

    if (method === "DELETE" && path.match(`/v3/order/(.*)$`)) {
        return CallerModule.CancellOrder;
    }

    if (method === "GET" && path.match(`/v3/order/(.*)/driver/(.*)$`)) {
        return CallerModule.GetDriver;
    }

    if (method === "DELETE" && path.match(`/v3/order/(.*)/driver/(.*)$`)) {
        return CallerModule.ChangeDriver;
    }

    if (method === "GET" && path.includes("/v3/cities")) {
        return CallerModule.GetMarket;
    }

    if (method === "POST" && path === "/v3/webhook") {
        return CallerModule.PostWebhook;
    }

    return CallerModule.AddPriorityFee;
}
