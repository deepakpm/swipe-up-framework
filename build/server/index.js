"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppServer = void 0;
var express_1 = __importDefault(require("express"));
__exportStar(require("./router-config"), exports);
var AppServer = /** @class */ (function () {
    function AppServer(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        Object.setPrototypeOf(this, AppServer.prototype);
    }
    AppServer.prototype.addMiddlewares = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var arg = args_1[_a];
            this.app.use(arg);
        }
    };
    AppServer.prototype.register = function (router, path) {
        if (path === void 0) { path = "/api"; }
        this.app.use(path, router);
    };
    AppServer.prototype.setJsonBodyParser = function () {
        this.app.use(express_1.default.json());
    };
    AppServer.prototype.start = function (callback) {
        if (callback === void 0) { callback = this.defaultCallBack; }
        this.app.listen(this.port, callback);
    };
    AppServer.prototype.defaultCallBack = function () {
        console.log("Server running on " + this.port);
    };
    return AppServer;
}());
exports.AppServer = AppServer;
