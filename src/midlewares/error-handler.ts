import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error";
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  console.error(err);
  res.status(500).send({ errors: [{ message: "Something went wrong..." }] });
};
