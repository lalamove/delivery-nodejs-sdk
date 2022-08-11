import { PatchOrderStop } from "../../models/patchOrderStop";
import PatchOrderPayloadBuilder from "./patchOrderPayloadBuilder";

export default class PatchOrderPayload {
    protected stops?: PatchOrderStop[];

    constructor(builder: PatchOrderPayloadBuilder) {
        const { stops } = builder;
        const stopsLength = stops?.length ?? 0;

        if (stopsLength > 17 || stopsLength < 2) {
            throw new Error("Stops must be between 2 and 17");
        }

        if (!stops?.every((stop) => stop.address)) {
            throw new Error("Address cannot be empty");
        }

        this.stops = stops;
    }
}
