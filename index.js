// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please describe your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Outline the steps to use this project',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please outline any installation requirements',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter any tests for this project',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please provide a path to a screenshot of your project',
        name: 'screenshot',
    },
    {
        type: 'list',
        message: 'Please choose a license for this project:',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'Mozilla Public License 2.0', 'None']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('File Created!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log (data);
        var readmeData = generateMarkdown(data);
        writeToFile('README.md', readmeData)
    })
}

// Function call to initialize app
init();
