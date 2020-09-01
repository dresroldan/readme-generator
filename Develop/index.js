const inquirer = require("inquirer");
const fs = require("fs")
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

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
    }, {
        type: "input",
        name: "table of contents",
        message: "What are the table of contents?",
    },

    {
        type: "input",
        name: "installation",
        message: "How does the user install the application? Provide instructions here",
    },

    {
        type: "input",
        name: "usage",
        message: "How does a user use the application? Provide instructions here",
    },

    {
        type: "input",
        name: "license",
        message: "Choose a license",
    },

    {
        type: "input",
        name: "contribution",
        message: "Who contributed to the application? If none write “none”",
    },

    {
        type: "input",
        name: "tests",
        message: "Run tests here",
    },

    {
        type: "input",
        name: "questions",
        message: "Any questions?",
    },
];



// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();