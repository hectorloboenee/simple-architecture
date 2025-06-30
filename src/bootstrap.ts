import 'reflect-metadata';
import 'dotenv/config';
import { DOMAIN_DIRNAME } from './root';
import { glob } from 'glob';

function loadHandler() {
  const commandHandlers = glob.sync(`${DOMAIN_DIRNAME}/**/*.commandHandler.*`);
  commandHandlers.map(commandHandler => require(commandHandler));
}

loadHandler();
