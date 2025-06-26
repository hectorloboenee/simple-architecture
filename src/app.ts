import { Server } from './server';
import { configureContainer } from '@architecture/ioc/configureContainer';
import { DependencyContainer } from 'tsyringe';

export class App {
  private server?: Server;

  async start() {
    const port = process.env.PORT || 3000;
    this.server = new Server(port as string);
    const containerBuilder: DependencyContainer = this.server.getContainerBuilder();
    configureContainer(containerBuilder);
    return this.server.listen();
  }
}
