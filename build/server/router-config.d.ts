import express from "express";
export declare type HttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare class AppRouter {
    private router;
    private static appRouter;
    constructor();
    static instance(): void;
    registerRouter(httpMethod: HttpMethod, path: string, controller: () => void | {}): express.Router;
}
