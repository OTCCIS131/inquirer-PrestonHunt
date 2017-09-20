const chalk = require('chalk')
const inquirer = require('inquirer')


console.log(chalk.green('Welcome to'),chalk.white("Preston's"),chalk.red('Pizzaria'))
console.log("Phone: 958-486-592")

var questions = 
[
    {
        name: 'pizzaSize',
        message: "What size would you like",
        type: "list",
        choices: ['Small', 'Medium', 'Large']
    },
    {
        name: 'toppings',
        message: 'What type of toppings would you like',
        type: 'checkbox',
        choices: [ 'pepperoni','sausage','canadian bacon','olives','onions','mushrooms']
    },
    {
        name: 'cut',
        message: 'How would you like your pizza cut',
        type: 'list',
        choices: ['normal','square']
    }
]

inquirer.prompt(questions).then(function ({pizzaSize,toppings,cut})
{
    console.log('Order receipt')
    console.log("You wanted a " + pizzaSize + " pizza. \n"
                + "With " + toppings + " on it. \n"
                + "and cut in a " + cut + " fashion." )
})