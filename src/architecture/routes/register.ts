import { Router } from 'express';
import { glob } from 'glob';
import { API_DIRNAME } from '../../dirConfig';
import { container, injectable } from 'tsyringe';
import { Route } from '@architecture/routes/route';

@injectable()
export class Register {
  private router?: Router;

  public use(router: Router): void {
    this.router = router;
  }

  public registerEndpoints(): void {
    const endpointsPaths = glob.sync(API_DIRNAME + '/**/*.endpoint.*');
    endpointsPaths.map(endpointPath => this.register(endpointPath));
  }

  async register(endpointPath: string): Promise<void> {
    const endpoint = await import(endpointPath);
    container.register<Route>('Route', { useClass: endpoint.default });
    const instance = container.resolve<Route>('Route');
    instance.registerRoutes(this.router as Router);
  }
}
