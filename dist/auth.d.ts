import { Config } from './config';
export declare class Auth {
    signRequest(config: Config, method: string, path: string, body: string): string;
}
