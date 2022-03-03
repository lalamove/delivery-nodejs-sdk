import {Config} from "./config";

export class Auth {
    signRequest(config: Config): string {
        return "HMAC"
    }
}