import { container, DependencyContainer } from 'tsyringe';

export function configureContainer(
  containerBuilder: DependencyContainer,
  configure?: (container: DependencyContainer) => void
) {
  // add custom configuration

  if (configure !== undefined) {
    configure(containerBuilder);
  }
}
