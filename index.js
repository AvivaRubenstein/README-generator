// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',  //accepts regular text
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',  //accepts regular text
        message: 'Enter a description of your project: ',
        name: 'description',
    },
    {
        type: 'input',  //accepts regular text
        message: 'What are the installation instructions for your project?',
        name: 'installation',
    },
    {
        type: 'input',  //accepts regular text
        message: 'What is the usage information for your project?',
        name: 'usage',
    },
    {
        type: 'input',  //accepts regular text
        message: 'What are the guidelines for contributing to this project?',
        name: 'contribution',
    },
    {
        type: 'input',  //accepts regular text
        message: 'What are the instructions for testing the application?',
        name: 'testing',
    },
    {
        type: 'list',  //user selects an option from the list
        message: 'Which license would you like to use?',
        choices: ["MIT", "Apache", "GPL", "none"],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];




// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README2.md", data, () => console.log("Success!  Access your README file to see the results."));
}

// TODO: Create a function to initialize app
function init() {
    var data;
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            data = answers;
            //the var mdContent is set to be equal to what the generateMarkdown function returns
            //in this case, it returns all of the markdown text we want to go into the README file
            var mdContent = generateMarkdown(data);
            writeToFile(mdContent);
        }
        );
}

// Function call to initialize app
init();

