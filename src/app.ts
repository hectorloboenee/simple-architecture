import { Server } from './server';
import { configureContainer } from '@architecture/ioc/configureContainer';
import { container, DependencyContainer, injectable } from 'tsyringe';
import { RouterBuilder } from './routerBuilder';

@injectable()
export class App {
  constructor(private server: Server) {}

  async start() {
    container.registerSingleton(RouterBuilder);
    // const containerBuilder: DependencyContainer = this.server.getContainerBuilder();
    // configureContainer(containerBuilder);
    return this.server.listen();
  }
}
