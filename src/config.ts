export class Config {
    publicKey: string;

    privateKey: string;

    env: string;

    constructor(publicKey: string, privateKey: string, env = "sandbox") {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        this.env = env;
    }
}
