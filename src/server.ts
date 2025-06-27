import express, { Request, Response, Router } from 'express';
import * as http from 'http';
import bodyParser from 'body-parser';
// import Router from 'express-promise-router';
import errorHandler from 'errorhandler';
import httpStatus from 'http-status';
import { EndpointsRegister } from '@architecture/ioc/endpointsRegister';
import { ContainerBuilderFactory } from '@architecture/ioc/containerFactory';
import { DependencyContainer, injectable } from 'tsyringe';
import { RouterBuilder } from './routerBuilder';

@injectable()
export class Server {
  private express: express.Express;
  private readonly port: string | number;
  private httpServer?: http.Server;

  constructor(
    private routerBuilder: RouterBuilder,
    private endpointRegister: EndpointsRegister
  ) {
    this.port = process.env.PORT || 3000;
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    // this.containerBuilder = ContainerBuilderFactory.getInstance();

    // const router = Router();
    const router = this.routerBuilder.getRouter();
    router.use(errorHandler());
    this.express.use(router);
    this.endpointRegister.setRouter(router);
    this.endpointRegister.registerEndpoints();

    // registerEndpoints(router);

    router.use((err: Error, request: Request, response: Response, next: Function) => {
      console.log(err);
      response.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(`Express server listening on port ${this.port}`);
      });
      resolve();
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            reject(error);
          }
          return reject();
        });
      }
      return resolve();
    });
  }
}
