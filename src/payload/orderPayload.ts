import OrderPayloadBuilder from "./orderPayloadBuilder";
import { Sender } from "../models/sender";
import { Recipient } from "../models/recipient";

export default class OrderPayload {
    private quotationId: string | undefined;

    private sender: Sender | undefined;

    private recipients: Recipient[] | undefined;

    private isPODEnabled?: boolean;

    private isRecipientSMSEnabled?: boolean;

    private partner?: string;

    private metadata?: object;

    constructor(opb: OrderPayloadBuilder) {
        if (opb.quotationId === undefined) {
            throw new Error("QuotationID cannot be empty");
        }
        if (opb.sender === undefined) {
            throw new Error("Sender cannot be empty");
        }
        if (opb.recipients === undefined) {
            throw new Error("recipients cannot be empty");
        }
        this.quotationId = opb.quotationId;
        this.sender = opb.sender;
        this.recipients = opb.recipients;
        this.isPODEnabled = opb.isPODEnabled;
        this.isRecipientSMSEnabled = opb.isRecipientSMSEnabled;
        this.partner = opb.partner;
        this.metadata = opb.metadata;
    }
}
