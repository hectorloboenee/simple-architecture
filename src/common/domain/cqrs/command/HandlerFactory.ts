import { Command } from './Command';
import { CommandHandler } from './CommandHandler';

export interface HandlerFactory {
  createHandler<TCommand extends Command>(command: TCommand): CommandHandler<TCommand>;
}
