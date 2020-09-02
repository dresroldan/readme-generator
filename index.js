const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
const util = require("util");

// array of questions for user
const questions = [

    {
        type: "input",
        name: "title",
        message: "What is the title of this application?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description",
    },

    {
        type: "input",
        name: "installation",
        message: "How does the user install the application?",
    },

    {
        type: "input",
        name: "usage",
        message: "How does the user use the application?",
    },

    {
        type: "list",
        name: "license",
        message: "Which license are you using?",
        choices: [
            "MIT License",
            "GVL GPL License",
            "Apache License",
            "No License"
        ]
    },

    {
        type: "input",
        name: "contribution",
        message: "Are there any contributors?",
    },

    {
        type: "input",
        name: "tests",
        message: "Run tests here",
    },


    {
        type: "input",
        name: "githubName",
        message: "What is your Github username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },

];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;

        }

        console.log("README created!");

    });

}


// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {

        const data = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", data);

    })
};

// function call to initialize program
init();