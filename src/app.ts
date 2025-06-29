import { Server } from './server';
import { container, injectable } from 'tsyringe';
import { Builder } from '@architecture/routes/builder';

@injectable()
export class App {
  constructor(private server: Server) {}

  async start() {
    container.registerSingleton(Builder);
    return this.server.listen();
  }
}
