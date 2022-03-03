"use strict";
class Config {
    constructor(publicKey, privateKey, env = "sandbox") {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        this.env = env;
    }
}
