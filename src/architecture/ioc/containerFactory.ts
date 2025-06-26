import { container, DependencyContainer } from 'tsyringe';

export class ContainerBuilderFactory {
  public static getInstance(): DependencyContainer {
    return container.createChildContainer();
  }
}
