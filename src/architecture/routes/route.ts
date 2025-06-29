import { Router, Request, Response } from 'express';

export interface Route {
  registerRoutes(router: Router): void;
}
