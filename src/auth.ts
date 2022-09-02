import * as CryptoJS from "crypto-js";
import Config from "./config";

export default function signRequest(
    config: Config,
    method: string,
    path: string,
    timestamp: number,
    body?: string
): string {
    const rawSignature = body
        ? `${timestamp}\r\n${method}\r\n${path}\r\n\r\n${body}`
        : `${timestamp}\r\n${method}\r\n${path}\r\n\r\n`;

    const SIGNATURE = CryptoJS.HmacSHA256(rawSignature, config.privateKey).toString();
    return SIGNATURE;
}
