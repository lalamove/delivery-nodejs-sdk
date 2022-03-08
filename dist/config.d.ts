export default class Config {
    publicKey: string;
    privateKey: string;
    env: string;
    constructor(publicKey: string, privateKey: string, env?: string);
}
