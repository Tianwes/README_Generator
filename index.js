const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = (answers) =>
`
# ${answers.projectTitle}   
[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-green)](https://opensource.org/licenses/${answers.license})

${answers.description}


## Table of Contents
[Installation](#installation)  
[Usage](#usage)  
[License](#license)  
[Contributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)  

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}  
To find out more about the ${answers.license}, click [here](https://opensource.org/licenses/${answers.license})


## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
Personal GitHub Page: [github.com/${answers.username}](github.com/${answers.username})

${answers.license} © [${answers.username}](github.com/${answers.username})

`;

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle" 
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
        message: "Give some guidelines on how a user can contribute to your application.",
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
        choices: ["Apache-2.0", "GPL-3.0", "MIT", "MPL-2.0", "EPL-2.0"],
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
]).then((answers) => {
   const readmeContent = generateREADME(answers);

    fs.writeFile("README.md", readmeContent, (err) => {
        err ? console.error(err) : console.log("Your README has been written :)")
    })
})

