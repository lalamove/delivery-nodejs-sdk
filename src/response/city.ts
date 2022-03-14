import { Service } from "../models/service";

export default interface ICity {
    id: string;
    name: string;
    services: Service[];
}
