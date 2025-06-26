import 'reflect-metadata';
import { App } from './app';

const app = new App();
app.start().catch(e => {
  console.error(e);
  process.exit(1);
});

process.on('uncaughtException', e => {
  console.error('uncaughtException', e);
  process.exit(1);
});
