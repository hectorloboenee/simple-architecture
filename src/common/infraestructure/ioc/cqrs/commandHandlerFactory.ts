import { HandlerFactory } from '@common/domain/cqrs/command/HandlerFactory';
import { Command } from '@common/domain/cqrs/command/Command';
import { CommandHandler } from '@common/domain/cqrs/command/CommandHandler';
import { container, injectable } from 'tsyringe';

@injectable()
export class CommandHandlerFactory implements HandlerFactory {
  createHandler<TCommand extends Command>(command: TCommand): CommandHandler<TCommand> {
    const handler = Reflect.getMetadata('command:handler', command.constructor);
    if (!handler) {
      throw new Error(`Unknown handler: ${command.constructor.name}`);
    }

    container.register<CommandHandler<TCommand>>('CommandHandler', { useClass: handler });
    const instance: CommandHandler<TCommand> = container.resolve<CommandHandler<TCommand>>('CommandHandler');

    return instance;
  }
}
