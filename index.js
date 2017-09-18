const chalk = require('chalk')
const inquirer = require('inquirer')


console.log("Welcome to Preston's Pizzaria")

var questions = 
[
    {
        message: "What size would you like",
        name: 'pizzaSize',
        type: "list",
        choices: ['Small', 'Medium', 'Large']
    },

    {
        message: 'What type of toppings would you like',
        name: 'Toppings',
        type: 'checkbox',
        choices: [ 'pepperoni','sausage','canadian bacon','olives','onions','mushrooms']
    },

    {
        message: 'How would you like your pizza cut',
        name: 'cut',
        type: 'list',
        choices: ['normal','square']
    }
]

inquirer.prompt(questions).then(function (answers)
{
    console.log('Order receipt')
    console.log(answers)
})