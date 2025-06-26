import { Server } from './server';
import { configureContainer } from '@architecture/ioc';

export class App {
  private server?: Server;

  async start() {
    const port = process.env.PORT || 3000;
    this.server = new Server(port as string);
    configureContainer();
    return this.server.listen();
  }
}
