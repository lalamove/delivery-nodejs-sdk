import { Coordinates } from "./coordinates";

export interface Stop {
    id?: string;
    coordinates: Coordinates;
    address: string;
}

export interface StopWithContact extends Stop {
    name: string;
    phone: string;
    POD?: object;
}
