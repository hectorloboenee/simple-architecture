import 'reflect-metadata';
import 'dotenv/config';
import { DOMAIN_DIRNAME } from './root';
import { glob } from 'glob';

function loadHandlers() {
  const commandHandlers = glob.sync(`${DOMAIN_DIRNAME}/**/*.commandHandler.*`);
  commandHandlers.map(commandHandler => require(commandHandler));
}

function loadValidators() {
  const commandValidators = glob.sync(`${DOMAIN_DIRNAME}/**/*.commandValidator.*`);
  commandValidators.map(commandValidator => require(commandValidator));
}

loadHandlers();
loadValidators();
