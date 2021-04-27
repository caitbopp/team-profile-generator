const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
let employees = [];


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
        employees.push(manager);
        console.log(manager);
        menu();
    });
};



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
        employees.push(engineer);
        console.log(engineer);
        menu();
    });
};



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
        employees.push(intern);
        console.log(intern);
        menu();
    });
};


menu = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "Do you want to add another member to your team?",
            choices: ["Add an Engineer", "Add an Intern", "No, my team in complete."]
        }
    ]).then(({options}) => {
        if (options === "Add an Engineer") {
            createEngineer();
        }else if (options === "Add an Intern") {
            createIntern();
        }else {generateTeam()}
        // Create generateTeam function - call in fs process - look into readme generator writeToFile function
    });



};

function writeToFile(fileName, data) {
    fs. writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!')
);}


function generateTeam() {
    inquirer.prompt(employees).then((data) => {
        writeToFile('teamProfile.html', generateHTML(data))
    })
}


createManager();

