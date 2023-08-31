#!/usr/bin/env node

import * as commander from 'commander';
import { install, uninstall, list } from './package';

commander
  .version('0.1.0')
  .description('A meta package manager for managing multiple packages')
  .name('meta')
  .usage('<command> [options]');

commander
  .command('install <packages...>')
  .alias('i')
  .description('Install one or more packages')
  .option('-g, --global', 'Install packages globally')
  .action((packages: string[], options: any) => {
    install(packages, options.global);
  });

commander
  .command('uninstall <packages...>')
  .alias('u')
  .description('Uninstall one or more packages')
  .option('-g, --global', 'Uninstall packages globally')
  .action((packages: string[], options: any) => {
    uninstall(packages, options.global);
  });

commander
  .command('list')
  .alias('ls')
  .description('List installed packages')
  .option('-g, --global', 'List global packages')
  .action((options: any) => {
    list(options.global);
  });

commander.parse(process.argv);
