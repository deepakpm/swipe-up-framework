"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMiddlewares = void 0;
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var AppMiddlewares = /** @class */ (function () {
    function AppMiddlewares() {
    }
    AppMiddlewares.useCors = function (options) {
        return (0, cors_1.default)(options);
    };
    AppMiddlewares.useHelmet = function () {
        return (0, helmet_1.default)();
    };
    AppMiddlewares.useLogger = function () {
        return (0, morgan_1.default)("combined");
    };
    return AppMiddlewares;
}());
exports.AppMiddlewares = AppMiddlewares;
