import {Contact} from "./models/contact";
import {Coordinates} from "./models/coordinates";

export default class Driver {
    id: string;

    contact: Contact;

    plateNumber: string;

    photo: string;

    coordinates: Coordinates;

    updatedAt: Date;

    private constructor() {
        // dummy info
        this.id = "ID";
        this.contact = {
            name: "Random",
            phone: "Phone number"
        };
        this.plateNumber = "platenumber";
        this.photo = "Photo";
        this.coordinates = {
            lat: "123",
            lng: "232"
        };
        this.updatedAt = new Date();
    }

    static retrieve(id: string, orderID: string): Driver {
        return new Driver();
    }
}
