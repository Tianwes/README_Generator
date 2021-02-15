const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "ProjectTitle" 
    },
    {
        type: "input",
        message: "Please give a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Explain how one would install this application.",
        name: "installation",
    },
    {
        type: "input",
        message: "Please explain how one would use your application.",
        name: "usage",
    },
    {
        type: "input",
        message: "Give some guidelines on how a user cn contribute.",
        name: "contribution",
    },
    {
        type: "input",
        message: "Please give instructions on how to test this application.",
        // Describe and show how to run the tests with code examples.
        name: "tests",
    },
    {
        type: "list",
        message: "Please choose a license from this list to add to your README file.",
        choices: ["Academic Free License v3.0", "Artistic license 2.0", "Educational Community License v2.0", "MIT",
                "Mozilla Public License 2.0", "Open Software License 3.0"],
        name: "license"
        // a badge is added to the top of the page, and a notice is added in license section
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
        // added to questions section with link to github (ex: www.gitub/username)
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "email"
    },
]).then(answers => {
    fs.writeFile("README.md", JSON.stringify(answers), err => {
        err ? console.error(err) : console.log("Your README has been written! :)")
    })
})

