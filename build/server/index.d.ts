export * from './router-config';
export declare class AppServer {
    private port;
    private app;
    constructor(port: number);
    addMiddlewares(...args: any[]): void;
    register(router: () => void, path?: string): void;
    setJsonBodyParser(): void;
    start(callback?: () => void): void;
    private defaultCallBack;
}
