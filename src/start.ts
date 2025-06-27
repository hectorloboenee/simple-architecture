import 'reflect-metadata';
import { App } from './app';
import { container } from 'tsyringe';

const app = container.resolve(App);
app.start().catch(e => {
  console.error(e);
  process.exit(1);
});

process.on('uncaughtException', e => {
  console.error('uncaughtException', e);
  process.exit(1);
});
