import { HandlerFactory } from '../../cqrs/command/handlerFactory';
import { Command } from '../../cqrs/command/command';
import { Handler } from '../../cqrs/command/handler';
import { container, injectable } from 'tsyringe';

@injectable()
export class CommandHandlerFactory implements HandlerFactory {
  CreateHandler<TCommand extends Command>(command: TCommand): Handler<TCommand> {
    const handler = Reflect.getMetadata('command:handler', command.constructor);
    if (!handler) {
      throw new Error(`Unknown handler: ${command.constructor.name}`);
    }

    container.register<Handler<TCommand>>('Handler', { useClass: handler });
    const instance: Handler<TCommand> = container.resolve<Handler<TCommand>>('Handler');

    return instance;
  }
}
