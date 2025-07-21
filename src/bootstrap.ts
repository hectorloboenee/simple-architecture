import 'reflect-metadata';
import 'dotenv/config';
import root from './root';
import { glob } from 'glob';

function loadEventHandlers() {
  const eventHandlers = glob.sync(`${root.DOMAIN_DIRNAME}/**/*.eventHandler.*`);
  eventHandlers.map(eventHandler => require(eventHandler));
}

function loadHandlers() {
  const commandHandlers = glob.sync(`${root.DOMAIN_DIRNAME}/**/*.commandHandler.*`);
  commandHandlers.map(commandHandler => require(commandHandler));
}

function loadValidators() {
  const commandValidators = glob.sync(`${root.DOMAIN_DIRNAME}/**/*.commandValidator.*`);
  commandValidators.map(commandValidator => require(commandValidator));
}

loadHandlers();
loadValidators();
loadEventHandlers();
