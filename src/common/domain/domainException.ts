import { Request, Response } from 'express';
import httpStatus from 'http-status';

export class DomainException extends Error {
  constructor(message: string) {
    super(message);
  }
}

const domainException = (error: any, request: Request, response: Response, next: Function) => {
  if (error instanceof DomainException) {
    response.status(httpStatus.BAD_REQUEST).json({ errors: [error.message] });
  } else {
    next(error);
  }
};

export default domainException;
