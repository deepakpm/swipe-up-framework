import { AppError } from './app-error';
export declare class NotFoundError extends AppError {
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
