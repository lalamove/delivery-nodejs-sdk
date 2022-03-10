import * as CryptoJS from "crypto-js";
import Config from "./config";

// eslint-disable-next-line import/prefer-default-export
export function signRequest(config: Config, method: string, path: string, body: string): string {
    const time = new Date().getTime().toString();
    const rawSignature = `${time}\r\n${method}\r\n${path}\r\n\r\n${body}`;
    const SIGNATURE = CryptoJS.HmacSHA256(rawSignature, config.privateKey).toString();
    return SIGNATURE;
}
