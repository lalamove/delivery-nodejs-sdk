import { PatchOrderStop } from "../../models/patchOrderStop";
import PatchOrderPayload from "./patchOrderPayload";

export default class PatchOrderPayloadBuilder {
    stops?: PatchOrderStop[];

    static patchOrderPayload(): PatchOrderPayloadBuilder {
        return new PatchOrderPayloadBuilder();
    }

    withStops(stops: PatchOrderStop[]): PatchOrderPayloadBuilder {
        this.stops = stops;
        return this;
    }

    build(): PatchOrderPayload {
        return new PatchOrderPayload(this);
    }
}
