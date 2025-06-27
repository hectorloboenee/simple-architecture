import { Router } from 'express';

export abstract class Endpoint {
  protected router?: Router;

  constructor() {}

  setRouterBuilder(router: Router) {
    this.router = router;
  }

  registerRouter(router: Router) {
    this.method(router);
  }

  abstract method(router: Router): void;
}
