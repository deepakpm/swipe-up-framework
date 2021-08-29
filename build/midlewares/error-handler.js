"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var app_error_1 = require("../errors/app-error");
var errorHandler = function (err, req, res, next) {
    if (err instanceof app_error_1.AppError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    console.error(err);
    res.status(500).send({ errors: [{ message: "Something went wrong..." }] });
};
exports.errorHandler = errorHandler;