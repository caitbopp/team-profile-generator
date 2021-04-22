const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");


menu = () => {
    createManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the team manager's name?",
                // Validation here
            },
            {
                type: "input",
                name: "id",
                message: "What is the team manager's employee id?",
                // Validation here
            },
            {
                type: "input",
                name: "email",
                message: "What is the team manager's email address?",
                // Validation here
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team manager's office number?",
                // Validation here
            }
        ]).then(({name, id, email, officeNumber}) => {
            const manager = new Manager(name, id, email, officeNumber);
            console.log(manager);
        });
    };
    createManager();



    createEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
                // Validation here
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's employee id?",
                // Validation here
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email address?",
                // Validation here
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is the engineer's GitHub username?",
                // Validation here
            }
        ]).then(({name, id, email, gitHub}) => {
            const engineer = new Engineer(name, id, email, gitHub);
            console.log(engineer);
        });
    };
    createEngineer();


    createIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
                // Validation here
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's employee id?",
                // Validation here
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email address?",
                // Validation here
            },
            {
                type: "input",
                name: "school",
                message: "What is the intern's school?",
                // Validation here
            }
        ]).then(({name, id, email, school}) => {
            const intern = new Intern(name, id, email, school);
            console.log(intern);
        });
    };
    createIntern();


};


menu();