export default class Config {
    publicKey: string;

    privateKey: string;

    env: string;

    host: string;

    constructor(publicKey: string, privateKey: string, env = "sandbox") {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        this.env = env;
        switch (env) {
            case "production":
                this.host = "rest.lalamove.com";
                break;
            default:
                this.host = "rest.sandbox.lalamove.com";
        }
    }
}
