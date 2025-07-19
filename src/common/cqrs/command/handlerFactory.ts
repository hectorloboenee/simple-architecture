import { Command } from '../../cqrs/command/command';
import { Handler } from '../../cqrs/command/handler';

export interface HandlerFactory {
  CreateHandler<TCommand extends Command>(command: TCommand): Handler<TCommand>;
}
