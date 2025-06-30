import './bootstrap';
import { App } from './app';
import { container } from 'tsyringe';
import '@domain/users/createUser/createUser.commandHandler';

const app = container.resolve(App);
app.start().catch(e => {
  console.error(e);
  process.exit(1);
});

process.on('uncaughtException', e => {
  console.error('uncaughtException', e);
  process.exit(1);
});
