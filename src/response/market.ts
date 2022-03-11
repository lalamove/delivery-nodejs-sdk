import { Service } from "../models/service";
import City from "./city";

export default class Market {
    id: string;

    cities: City[];

    constructor(id: string, cities: City[]) {
        this.id = id;
        this.cities = cities;
    }
}
