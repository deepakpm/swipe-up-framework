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
    };
    AppRouter.prototype.registerRouter = function (httpMethod, path, controller) {
        switch (httpMethod) {
            case "DELETE":
                this.router.delete(path, controller);
                break;
            case "GET":
                this.router.get(path, controller);
                break;
            case "PATCH":
                this.router.patch(path, controller);
                break;
            case "POST":
                this.router.post(path, controller);
                break;
            case "PUT":
                this.router.put(path, controller);
                break;
            default:
                this.router.get(path, controller);
                break;
        }
        return this.router;
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
