// const chalk = import("chalk");
// console.log(chalk.blue('Hello NodeJS'));
const chalk = require("chalk");
const text = require("./data.js");
console.log(chalk.blue("Hello NodeJS"));
console.log(chalk.blue(text));

console.log(__dirname);
console.log(__filename);