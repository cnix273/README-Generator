//Dependencies and variables
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// array of questions for user
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter your name.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid GitHub username.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid email adress.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "repo_name",
        message: "What is the name of your GitHub repo?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid name for your GitHub repo");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a title for your project");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description of your project.",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a description for your project");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please describe the steps required to install your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for how to use your project."
    },
    {
        type: "input",
        name: "screenshot",
        message: "If your would like to include a screenshot depicting the functionality of your application and how to use it, please enter the image source url."
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project.",
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU GPLv3',
            'BSD License 2.0',
            'Microsoft Public License',
            'Mozilla Public License 2.0'
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "If you would like other developers to contribute to your project, please provide guidelines on how to do so."
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide examples on how to run any tests written for your application, if applicable."
    }
];

// function to write README file
function writeToFile(newReadMe) {
    fs.writeFile('sampleREADME.md', newReadMe, err =>
    err ? console.error(err) : console.log("Your README.md file has been generated!"));
};

// function to initialize program
async function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const newReadMe = generateMarkdown(answers);
            writeToFile(newReadMe);
        })
        .catch(err => {
            console.log(err);
        });
}

// function call to initialize program
init();