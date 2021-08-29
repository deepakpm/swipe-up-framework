import { Router } from "express";
export * from './router-config';
export declare class AppServer {
    private port;
    private app;
    constructor(port: number);
    addMiddlewares(...args: any[]): void;
    register(router: Router, path?: string): void;
    start(callback?: () => void): void;
    private defaultCallBack;
}
