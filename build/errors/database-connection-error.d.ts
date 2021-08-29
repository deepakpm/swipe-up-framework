import { AppError } from './app-error';
export declare class DatabaseConnectionError extends AppError {
    reason: string;
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
