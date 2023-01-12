// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
inquirer
  .prompt([ 
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
   
  ])

//   .then((answers) => {
//     const markdownContent = generateMarkdown(answers);

//     fs.writeFile('README.md', markdownContent, (err) =>
//     err? console.log(err) : console.log("Successfully created README.md!"));

//   });




const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
