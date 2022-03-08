import Config from "./config";
export default class Auth {
    signRequest(config: Config, method: string, path: string, body: string): string;
}
