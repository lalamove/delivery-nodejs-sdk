import * as CryptoJS from "crypto-js";
import Config from "./config";

export default function signRequest(
    config: Config,
    method: string,
    path: string,
    body?: string
): string {
    const time = new Date().getTime().toString();
    const rawSignature = body
        ? `${time}\r\n${method}\r\n${path}\r\n\r\n${body}`
        : `${time}\r\n${method}\r\n${path}\r\n\r\n`;

    const SIGNATURE = CryptoJS.HmacSHA256(rawSignature, config.privateKey).toString();
    return SIGNATURE;
}
