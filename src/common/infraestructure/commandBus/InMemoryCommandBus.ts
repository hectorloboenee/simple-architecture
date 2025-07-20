import { CommandBus } from '../../domain/cqrs/command/CommandBus';
import { Command } from '../../domain/cqrs/command/Command';
import { HandlerFactory } from '../../domain/cqrs/command/HandlerFactory';
import { CommandHandler } from '../../domain/cqrs/command/CommandHandler';
import { inject, injectable } from 'tsyringe';

@injectable()
export class InMemoryCommandBus implements CommandBus {
  constructor(@inject('HandlerFactory') private _commandHandlerFactory: HandlerFactory) {}

  async dispatch<TCommand extends Command>(command: TCommand): Promise<void> {
    if (command === null) {
      throw new Error(`Invalid command provided`);
    }

    const commandHandler: CommandHandler<TCommand> = this._commandHandlerFactory.createHandler(command);
    await commandHandler.handle(command);
  }
}
