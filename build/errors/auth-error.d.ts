import { AppError } from './app-error';
export declare class NotAuthorizedError extends AppError {
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
