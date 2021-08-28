import { ValidationError } from 'express-validator';
import { AppError } from './app-error';

export class RequestValidationError extends AppError {
  statusCode = 400;
  constructor(public erros: ValidationError[]) {
    super('Invalid Request');
    //Only becuase we are exteding a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.erros.map((err) => ({ message: err.msg, field: err.param }));
  
  }
  
}
