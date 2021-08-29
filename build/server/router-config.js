"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
var express_1 = __importDefault(require("express"));
var AppRouter = /** @class */ (function () {
    function AppRouter() {
        this.router = express_1.default.Router();
        Object.setPrototypeOf(this, AppRouter.prototype);
    }
    AppRouter.instance = function () {
        if (!AppRouter.appRouter) {
            AppRouter.appRouter = new AppRouter();
        }
        return AppRouter.appRouter;
    };
    AppRouter.prototype.registerRouter = function (httpMethod, path) {
        var handler = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            handler[_i - 2] = arguments[_i];
        }
        switch (httpMethod) {
            case "GET":
                this.router.get(path, handler);
                break;
            case "DELETE":
                this.router.delete(path, handler);
                break;
            case "PATCH":
                this.router.patch(path, handler);
                break;
            case "POST":
                this.router.post(path, handler);
                break;
            case "PUT":
                this.router.put(path, handler);
                break;
            default:
                this.router.get(path, handler);
                break;
        }
    };
    AppRouter.prototype.getRouter = function () {
        return this.router;
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
