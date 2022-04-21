import { PatchOrderStop } from "../../models/patchOrderStop";
import PatchOrderPayloadBuilder from "./patchOrderPayloadBuilder";

export default class PatchOrderPayload {
    protected stops?: PatchOrderStop[];

    constructor(builder: PatchOrderPayloadBuilder) {
        const { stops } = builder;

        if (!stops || !(stops?.length ?? 0 > 2)) {
            throw new Error("Stops must be at least 2");
        }

        if (!stops.every((x) => x.address)) {
            throw new Error("Address cannot be empty");
        }

        this.stops = stops;
    }
}
