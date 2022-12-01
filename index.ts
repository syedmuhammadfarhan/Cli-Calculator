#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

function sleep() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};

async function welcome() {
    let welcomeNote = chalkAnimation.neon("Let's Do Some Math's...\n");

    await sleep();
    welcomeNote.stop();
};
console.log(chalk.greenBright.bold(`             【C】【A】【L】【C】【U】【L】【A】【T】【O】【R】
                      ＤＥＶＥＬＯＰ ＢＹ ＦＡＲＨＡN
`))
await welcome();

async function askQuestion() {
    console.log('');
    const answer = await inquirer
        .prompt([{
            type: 'list',
            name: 'operator',
            message: 'select operation to perform ?',
            choices: ['Division', 'Multiplication', 'Addition', 'Subtraction'],
        },
        {
            type: 'input',
            name: 'num1',
            message: 'Enter 1st Number: ',
            validate(input) {
                if (!(isNaN(input))) {
                    return true;
                }

                throw Error('Please provide a valid Number.');
            },
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter 2nd Number: ',
            validate(input) {
                if (!(isNaN(input))) {
                    return true;
                }

                throw Error('Please provide a valid Number.');
            },
        }
        ])

    if (answer.operator === 'Division')
        console.log(`\nAnswer of `, chalk.red(`${answer.num1} ÷ ${answer.num2} = ${Number(answer.num1) / Number(answer.num2)}\n`));
    if (answer.operator === 'Multiplication')
        console.log(`\nAnswer of `, chalk.red(`${answer.num1} x ${answer.num2} = ${Number(answer.num1) * Number(answer.num2)}\n`));
    if (answer.operator === 'Addition')
        console.log(`\nAnswer of `, chalk.red(`${answer.num1} + ${answer.num2} = ${Number(answer.num1) + Number(answer.num2)}\n`));
    if (answer.operator === 'Subtraction')
        console.log(`\nAnswer of `, chalk.red(`${answer.num1} - ${answer.num2} = ${Number(answer.num1) - Number(answer.num2)}\n`));


}



async function toContinue() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
                type: 'input',
                name: 'restart',
                message: 'Do you want to perfom another calculation (y/n):'

            })

    }
    while (again.restart === 'y' || again.restart === 'Y' || again.restart === 'yes' || again.restart === 'YES')

}

toContinue();