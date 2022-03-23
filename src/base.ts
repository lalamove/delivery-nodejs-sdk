import Config from "./config";

export default class Base {
    config: Config;

    constructor(config: Config) {
        this.config = config;
    }

    getConfig(): Config {
        return this.config;
    }
}
