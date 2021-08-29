export * from "./router-config";
import { ParamsDictionary, RequestHandler } from "express-serve-static-core";
import { ParsedQs } from "qs";
export declare class AppServer {
    private port;
    private app;
    constructor(port: number);
    addMiddlewares(...args: any[]): void;
    register(path?: string, ...handler: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>[]): void;
    use(...handler: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>[]): void;
    setJsonBodyParser(): void;
    start(callback?: () => void): void;
    setNotFoundError(): void;
    private defaultCallBack;
}
