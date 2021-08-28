import { AppError } from './app-error';

export class DatabaseConnectionError extends AppError {
  reason = 'Error connection to database';
  statusCode = 500;
  constructor() {
    super('Error connecttion to databae');
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeErrors() {
    return [{ message: this.reason }];
  }
}
