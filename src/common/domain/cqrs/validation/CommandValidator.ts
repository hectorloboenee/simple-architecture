export interface CommandValidator<TCommand> {
  validate(command: TCommand): Promise<boolean>;
}
