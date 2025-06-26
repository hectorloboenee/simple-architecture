import { Router } from 'express';
import { glob } from 'glob';
import { DependencyContainer } from 'tsyringe';
import { Root } from '../../root';

async function register(containerBuilder: DependencyContainer, endpointPath: string, router: Router) {
  const endpoint = await import(endpointPath);
  endpoint.register(router);
}

export function registerEndpoints(containerBuilder: DependencyContainer, router: Router) {
  const endpointsPaths = glob.sync(Root.getDirnameApi() + '/**/*.endpoint.*');
  endpointsPaths.map(endpointPath => register(containerBuilder, endpointPath, router));
}
