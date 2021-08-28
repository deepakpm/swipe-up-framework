import { AppError } from "./app-error";
export class BadRequestError extends AppError {
  serializeErrors() {
    return [
      {
        message: this.error,
      },
    ];
  }
  constructor(public error: string) {
    super(error);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  statusCode = 400;
}
