import express, { Request, Response } from 'express';
import * as http from 'http';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import httpStatus from 'http-status';
import { Register } from '@architecture/routes/register';
import { injectable } from 'tsyringe';
import { Builder } from '@architecture/routes/builder';
import { env } from './environment';
import { RegisterCqrs } from '@architecture/ioc/cqrs/register';

@injectable()
export class Server {
  private express: express.Express;
  private readonly port: string | number;
  private httpServer?: http.Server;

  constructor(
    private routerBuilder: Builder,
    private endpointRegister: Register
  ) {
    this.port = env.PORT || 3000;
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));

    const router = this.routerBuilder.getRouter();
    router.use(errorHandler());
    this.express.use(router);
    this.endpointRegister.use(router);

    RegisterCqrs.register();

    this.endpointRegister.registerEndpoints();

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
