#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log

const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('Simple Password Generator')

program
.option('-l, --length <number>', 'length of password', '8')
.option('-l, --save ', 'save password to password.txt')
.option('-nn, --no-numbers', 'remove numbers')
.option('-ns, --no-symbols', 'remove symbols')
.parse()

// console.log(program.opts());

const {length,save,numbers,symbols} = program.opts()

// console.log(numbers, symbols);

//get generated password
const generatedPassword = createPassword(length, numbers, symbols)

//save the password
if (save) {
    savePassword(generatedPassword)
}

//copy to clipboard
clipboardy.writeSync(generatedPassword)


//output genearted password

log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.yellow('Password copied to clipboard'))


