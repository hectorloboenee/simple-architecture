import { Router } from 'express';
import { glob } from 'glob';

async function register(endpointPath: string, router: Router) {
  const endpoint = await import(endpointPath);
  endpoint.register(router);
}

export function registerEndpoints(router: Router) {
  const endpointsPaths = glob.sync(__dirname + '/**/*.endpoint.*');
  endpointsPaths.map(endpointPath => register(endpointPath, router));
}
