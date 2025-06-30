import { Bus } from '@architecture/cqrs/command/Bus';
import { Command } from '@architecture/cqrs/command/command';
import { HandlerFactory } from '@architecture/cqrs/command/handlerFactory';
import { Handler } from '@architecture/cqrs/command/handler';
import { inject, injectable } from 'tsyringe';

@injectable()
export class SyncBus implements Bus {
  constructor(@inject('HandlerFactory') private commandHandlerFactory: HandlerFactory) {}

  async Dispatch<TCommand extends Command>(command: TCommand): Promise<void> {
    if (command === null) {
      throw new Error(`Invalid command provided`);
    }

    const commandHandler: Handler<TCommand> = this.commandHandlerFactory.CreateHandler(command);
    await commandHandler.Handle(command);
  }
}
