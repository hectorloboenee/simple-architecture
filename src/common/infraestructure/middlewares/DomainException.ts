import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { DomainException } from '@common/domain/DomainException';

const domainException = (error: any, request: Request, response: Response, next: Function) => {
  if (error instanceof DomainException) {
    response.status(httpStatus.BAD_REQUEST).json({ errors: [error.message] });
  } else {
    next(error);
  }
};

export default domainException;
