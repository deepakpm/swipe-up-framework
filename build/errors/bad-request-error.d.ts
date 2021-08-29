import { AppError } from "./app-error";
export declare class BadRequestError extends AppError {
    error: string;
    serializeErrors(): {
        message: string;
    }[];
    constructor(error: string);
    statusCode: number;
}
