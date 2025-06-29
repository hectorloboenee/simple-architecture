import { Server } from './server';
import { container, injectable } from 'tsyringe';
import { RouterBuilder } from './routerBuilder';

@injectable()
export class App {
  constructor(private server: Server) {}

  async start() {
    container.registerSingleton(RouterBuilder);
    return this.server.listen();
  }
}
