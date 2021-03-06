import { Coordinates } from "./coordinates";
import { Contact } from "./contact";

export interface Stop {
    id?: string;
    coordinates: Coordinates;
    address: string;
    contact: Contact;
}
