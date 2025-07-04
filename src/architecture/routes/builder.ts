import PromiseRouter from 'express-promise-router';
import { Router } from 'express';
import { injectable } from 'tsyringe';

@injectable()
export class Builder {
  public router: Router;

  constructor() {
    this.router = PromiseRouter();
  }

  getRouter(): Router {
    return this.router;
  }
}
