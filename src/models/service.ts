import { Dimensions } from "./dimensions";
import { Measurement } from "./measurement";
import { SpecialRequest } from "./specialRequest";
import { DeliveryItemSpec } from "./deliveryItemSpec";

export interface Service {
    key: string;
    description: string;
    dimensions: Dimensions;
    load: Measurement;
    specialRequests: SpecialRequest[];
    deliveryItemSpec: DeliveryItemSpec;
}
