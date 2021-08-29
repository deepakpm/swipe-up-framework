import { ValidationError } from 'express-validator';
import { AppError } from './app-error';
export declare class RequestValidationError extends AppError {
    erros: ValidationError[];
    statusCode: number;
    constructor(erros: ValidationError[]);
    serializeErrors(): {
        message: any;
        field: string;
    }[];
}
