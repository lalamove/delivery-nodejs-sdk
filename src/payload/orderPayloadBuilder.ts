import OrderPayload from "./orderPayload";
import { Sender } from "../models/sender";
import { Recipient } from "../models/recipient";

export default class OrderPayloadBuilder {
    quotationId: string | undefined;

    sender: Sender | undefined;

    recipients: Recipient[] | undefined;

    isPODEnabled?: boolean;

    isRecipientSMSEnabled?: boolean;

    partner?: string;

    metadata?: object;

    static orderPayload(): OrderPayloadBuilder {
        return new OrderPayloadBuilder();
    }

    withQuotationID(quotationId: string): OrderPayloadBuilder {
        this.quotationId = quotationId;
        return this;
    }

    withSender(sender: Sender): OrderPayloadBuilder {
        this.sender = sender;
        return this;
    }

    withRecipients(recipients: Recipient[]): OrderPayloadBuilder {
        this.recipients = recipients;
        return this;
    }

    withIsPODEnabled(isPodEnabled: boolean): OrderPayloadBuilder {
        this.isPODEnabled = isPodEnabled;
        return this;
    }

    withIsRecipientSmsEnabled(isRecipientSMSEnabled: boolean): OrderPayloadBuilder {
        this.isRecipientSMSEnabled = isRecipientSMSEnabled;
        return this;
    }

    withPartner(partner: string): OrderPayloadBuilder {
        this.partner = partner;
        return this;
    }

    withMetadata(metadata: object): OrderPayloadBuilder {
        this.metadata = metadata;
        return this;
    }

    build(): OrderPayload {
        return new OrderPayload(this);
    }
}
