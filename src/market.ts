import { Service } from "./models/service";
import City from "./city";

export default class Market {
    id: string;

    cities: City[];

    constructor() {
        this.id = "ID";
        this.cities = [];
    }

    static retrieve(id: string): Market {
        return new Market();
    }
}
