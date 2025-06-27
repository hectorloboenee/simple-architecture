import { Router } from 'express';
import { glob } from 'glob';
import { Root } from '../../root';
import { container, injectable } from 'tsyringe';
import { Route } from '@architecture/Route';

// async function register(endpointPath: string, router: Router) {
//   const endpoint = await import(endpointPath);
//   const instance: Route = container.resolve(endpoint);
//   instance.registerRoutes(router);
// }
//
// // async function register(endpointPath: string, router: Router) {
// //   const endpoint = await import(endpointPath);
// //   endpoint.register(router);
// // }
//
// export function registerEndpoints(router: Router) {
//   const endpointsPaths = glob.sync(Root.getDirnameApi() + '/**/*.endpoint.*');
//   endpointsPaths.map(endpointPath => register(endpointPath, router));
// }

@injectable()
export class EndpointsRegister {
  private router?: Router;

  public setRouter(router: Router): void {
    this.router = router;
  }

  public registerEndpoints(): void {
    const endpointsPaths = glob.sync(Root.getDirnameApi() + '/**/*.endpoint.*');
    endpointsPaths.map(endpointPath => this.register(endpointPath));
  }

  async register(endpointPath: string): Promise<void> {
    const endpoint = await import(endpointPath);
    container.register<Route>('Route', { useClass: endpoint.default });
    const instance = container.resolve<Route>('Route');
    instance.registerRoutes(this.router as Router);
  }
}
