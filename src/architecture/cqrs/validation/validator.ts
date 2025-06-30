export interface Validator<TCommand> {
  validate(command: TCommand): Promise<boolean>;
}
