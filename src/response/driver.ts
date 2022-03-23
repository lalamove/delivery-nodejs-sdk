import { Contact } from "../models/contact";
import { Coordinates } from "../models/coordinates";

export interface IDriver {
    id: string;
    contact: Contact;
    plateNumber: string;
    photo: string;
    coordinates: Coordinates;
    updatedAt: Date;
}
