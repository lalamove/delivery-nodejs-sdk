import Quotation from "./quotation";
import Order from "./order";
import Driver from "./driver";
import Market from "./market";
import City from "./city";
import Config from "./config";

export default class Client {
    Config: Config;

    Quotation: Quotation;

    Order: Order;

    Driver: Driver;

    Market: Market;

    City: City;

    constructor(config: Config) {
        this.Config = config;
        this.Quotation = new Quotation(config);
        this.Order = new Order(config);
        this.Driver = new Driver(config);
        this.Market = new Market(config);
        this.City = new City(config);
    }
}
