import { Coordinates } from "./coordinates";

export interface PatchOrderStop {
    coordinates?: Coordinates;
    address: string;
    name?: string;
    phone?: string;
    remarks?: string;
}
