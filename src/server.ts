import express, { Request, Response } from 'express';
import * as http from 'http';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import httpStatus from 'http-status';
import { Register } from '@config/endpoints/register';
import { injectable } from 'tsyringe';
import { Builder } from '@config/endpoints/builder';
import { env } from './environment';
import { RegisterCqrs } from '@common/infraestructure/ioc/cqrs/RegisterCqrs';
import validationException from '@common/infraestructure/middlewares/ValidationException';
import domainException from '@common/infraestructure/middlewares/DomainException';
import { RegisterEvents } from '@common/infraestructure/ioc/events/RegisterEvents';

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
    RegisterEvents.register();

    this.endpointRegister.registerEndpoints();

    this.express.use(validationException);
    this.express.use(domainException);

    router.use((err: Error, request: Request, response: Response, next: Function) => {
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
