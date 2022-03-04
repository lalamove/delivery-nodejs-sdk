import { Config } from "./config";
import * as CryptoJS from "crypto-js";

export class Auth {
    signRequest(config: Config, method: string, path: string, body: string): string {
        const time = new Date().getTime().toString();
        const rawSignature = `${time}\r\n${method}\r\n${path}\r\n\r\n${body}`;
        const SIGNATURE = CryptoJS.HmacSHA256(rawSignature, config.privateKey).toString();
        return SIGNATURE;
    }
}
