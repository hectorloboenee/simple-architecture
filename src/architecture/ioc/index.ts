import { container, DependencyContainer } from 'tsyringe';

export function configureContainer(configure?: (container: DependencyContainer) => void) {
  const containerBuilder: DependencyContainer = container.createChildContainer();
  // add custom configuration

  if (configure !== undefined) {
    configure(containerBuilder);
  }
}
