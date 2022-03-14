import { Service } from "../models/service";

export interface ICity {
    id: string;
    name: string;
    services: Service[];
}
