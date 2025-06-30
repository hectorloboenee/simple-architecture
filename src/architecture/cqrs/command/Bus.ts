import { Command } from '@architecture/cqrs/command/command';

export interface Bus {
  Dispatch<TCommand extends Command>(command: TCommand): Promise<void>;
}
