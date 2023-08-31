#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import fs from 'fs';
import path from 'path';

// Register commands
const commands = [];

// Load subcommands from the 'subcommands' folder
const subcommandsDir = path.join(__dirname, 'commands');
const subcommandFiles = fs.readdirSync(subcommandsDir);

subcommandFiles.forEach(file => {
  const subcommand = require(path.join(subcommandsDir, file));
  commands.push(subcommand);
});

// Parse command line arguments
const [,, commandName] = process.argv;

// Find and execute the command
const command = commands.find(cmd => cmd.name === commandName);
if (command) {
  console.log(boxen(chalk.bold(command.description), { padding: 1 }));
  command.execute();
} else {
  console.log(chalk.red('Command not found!'));
}
