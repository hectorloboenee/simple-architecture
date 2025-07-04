import { ValidationError } from 'yup';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

const ValidationException = (error: any, request: Request, response: Response, next: Function) => {
  if (error instanceof ValidationError) {
    response.status(httpStatus.BAD_REQUEST).json({ errors: error.errors });
  } else {
    next(error);
  }
};

export default ValidationException;
