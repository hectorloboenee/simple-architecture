import { Command } from '../../cqrs/command/command';

export interface Bus {
  dispatch<TCommand extends Command>(command: TCommand): Promise<void>;
}
