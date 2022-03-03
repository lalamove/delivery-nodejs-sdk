"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
class Config {
    constructor(publicKey, privateKey, env = "sandbox") {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        this.env = env;
    }
}
exports.Config = Config;
