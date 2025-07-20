import { Router } from 'express';

export abstract class Endpoint {
  protected router!: Router;

  constructor() {}

  use(router: Router) {
    this.router = router;
    this.registerRoute();
  }

  private registerRoute(): void {
    this.run();
  }

  abstract run(): void;
}
