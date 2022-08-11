import { Contact } from "./contact";
import { Coordinates } from "./coordinates";

export interface Stop {
    id?: string;
    coordinates: Coordinates;
    address: string;
}

export interface StopWithContact extends Stop {
    contact: Contact;
}
