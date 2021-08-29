import express from "express";
import { ParamsDictionary, RequestHandler } from "express-serve-static-core";
import { ParsedQs } from "qs";
export declare type HttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare class AppRouter {
    private router;
    private static appRouter;
    constructor();
    static instance(): AppRouter;
    registerRouter(httpMethod: HttpMethod, path: string, ...handler: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>[]): void;
    getRouter(): express.Router;
}
