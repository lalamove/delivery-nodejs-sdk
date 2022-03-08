import {Service} from "./models/service";

export default class City {
    id: string;
    name: string;
    services: Service[];

    constructor() {
        this.id = "ID";
        this.name = "name";
        this.services = [];
    }

    static retrieve(id: string): City {
        return new City();
    }
}