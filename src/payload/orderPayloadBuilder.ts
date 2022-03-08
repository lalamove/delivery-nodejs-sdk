import OrderPayload from "./orderPayload";
import { Sender } from "../models/sender";
import { Recipient } from "../models/recipient";

export default class OrderPayloadBuilder {
    quotationId: string | undefined;

    sender: Sender | undefined;

    recipients: Recipient[] | undefined;

    fleetOption?: string;

    isPODEnabled?: boolean;

    isRecipientSmsEnabled?: boolean;

    paymentMethod?: string;

    partner?: string;

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

    withFleetOption(fleetOption: string): OrderPayloadBuilder {
        this.fleetOption = fleetOption;
        return this;
    }

    withIsPODEnabled(isPodEnabled: boolean): OrderPayloadBuilder {
        this.isPODEnabled = isPodEnabled;
        return this;
    }

    withIsRecipientSmsEnabled(isRecipientSmsEnabled: boolean): OrderPayloadBuilder {
        this.isRecipientSmsEnabled = isRecipientSmsEnabled;
        return this;
    }

    withPaymentMethod(paymentMethod: string): OrderPayloadBuilder {
        this.paymentMethod = paymentMethod;
        return this;
    }

    withPartner(partner: string): OrderPayloadBuilder {
        this.partner = partner;
        return this;
    }

    build(): OrderPayload {
        return new OrderPayload(this);
    }
}
