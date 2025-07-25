import { HandlerCommandFactory } from '@common/domain/cqrs/command/HandlerCommandFactory';
import { Command } from '@common/domain/cqrs/command/Command';
import { CommandHandler } from '@common/domain/cqrs/command/CommandHandler';
import { container, injectable } from 'tsyringe';

@injectable()
export class CommandHandlerFactory implements HandlerCommandFactory {
  createHandler<TCommand extends Command>(command: TCommand): CommandHandler<TCommand> {
    const handler: any = Reflect.getMetadata('command:handler', command.constructor);
    if (!handler) {
      throw new Error(`Unknown handler: ${command.constructor.name}`);
    }

    container.register<CommandHandler<TCommand>>('CommandHandler', { useClass: handler });
    const instance: CommandHandler<TCommand> = container.resolve<CommandHandler<TCommand>>('CommandHandler');

    return instance;
  }
}
