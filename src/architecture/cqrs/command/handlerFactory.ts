import { Command } from '@architecture/cqrs/command/command';
import { Handler } from '@architecture/cqrs/command/handler';

export interface HandlerFactory {
  CreateHandler<TCommand extends Command>(command: TCommand): Handler<TCommand>;
}
