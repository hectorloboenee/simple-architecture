import express, { Request, Response } from 'express';
import * as http from 'http';
import bodyParser from 'body-parser';
import Router from 'express-promise-router';
import errorHandler from 'errorhandler';
import httpStatus from 'http-status';
import { registerEndpoints } from '@architecture/ioc/endpointRegister';
import { ContainerBuilderFactory } from '@architecture/ioc/containerFactory';
import { DependencyContainer } from 'tsyringe';

export class Server {
  private express: express.Express;
  private readonly port: string;
  private httpServer?: http.Server;
  private readonly containerBuilder: DependencyContainer;

  constructor(port: string) {
    this.port = port;
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.containerBuilder = ContainerBuilderFactory.getInstance();

    const router = Router();
    router.use(errorHandler());
    this.express.use(router);

    registerEndpoints(this.containerBuilder, router);

    router.use((err: Error, request: Request, response: Response, next: Function) => {
      console.log(err);
      response.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }

  getContainerBuilder(): DependencyContainer {
    return this.containerBuilder;
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(`Express server listening on port ${this.port}`);
      });
      resolve();
    });
  }

  getHttpServer() {
    return this.httpServer;
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
