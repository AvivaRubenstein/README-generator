// TODO: Include packages needed for this application
const fs = require('fs');
//here we are linking to our generateMarkdown.js file, which contains the functions necessary for generating the README content once the information is obtained from the user
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
// array of questions for user input
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




//function to write README file -- the file will be called README2.md because this project already has a file named README.md which we do not want to be overwritten by the new content
//when the file is written, a success message will be logged in the console.
function writeToFile(data) {
    fs.writeFile("README2.md", data, () => console.log("Success!  Access your README file to see the results."));
}

// function to initialize app
function init() {
    var data;
    //inquirer.prompt will prompt users with questions in the terminal when the command "node index.js" is run. 
    inquirer
        .prompt(questions)
        //the answers to the questions are passed in as "answers", and we are storing this information in a variable called data
        .then((answers) => {
            console.log(answers);
            data = answers;
            //the var mdContent is set to be equal to what the generateMarkdown function returns
            //in this case, it returns all of the markdown text we want to go into the README file
            var mdContent = generateMarkdown(data);
            //we are taking the mdContent and passing it in as a parameter to the writeToFile function so that the markdown file we generated will be what is written to the README2.md file
            writeToFile(mdContent);
        }
        );
}

// Function call to initialize app
init();

