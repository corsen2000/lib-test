#!/usr/bin/env node
import { greet } from './greetings';
import { add } from './math';
const program = require('commander');

program
  .option('-u, --user [value]', 'User name')
  .option('-x, --xValue [value]', 'X value')
  .option('-y, --yValue [value]', 'Y value')
  .parse(process.argv);

const xValue = +program.xValue as number;
const yValue = +program.yValue as number;

console.log(greet(program.user));
console.log(`Adding ${xValue} and ${yValue}`);

const result = add(xValue, yValue);

console.log(result);