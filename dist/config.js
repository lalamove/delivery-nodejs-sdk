"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor(publicKey, privateKey, env = "sandbox") {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        this.env = env;
    }
}
exports.default = Config;
