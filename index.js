// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const path = require('path');

// file and directory output
const output_dir = path.resolve(__dirname, 'dist');
const output_file = path.join(output_dir, 'team.html');

const render = require('./src/page-template');

teamArray = [];

// TODO Split things up into separate functions
// TODO Going to have to create four functions
function startMenu() {
  inquirer.prompt(
    [
      {
        type: 'list',
        name: 'roleChoice',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'Manager', 'Finish']
      }
    ]
  )
    .then(
      data => {
        switch (data.roleChoice) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          case 'Manager':
            addManager();
            break;
          default:
            writeToFile();
        }
      }
    )
}
// generate each type of employee
// generate manager
function addManager() {
  inquirer.prompt(questions.managerQuestions)
    .then(
      data => {
        const manager = new Manager(data.id, data.name, data.email, data.officeNumber);
        teamArray.push(manager);
        startMenu();
      })
}

function addIntern() {
  inquirer.prompt(questions.internQuestions)
    .then(
      data => {
        const intern = new Intern(data.id, data.name, data.email, data.school);
        teamArray.push(intern);
        startMenu();
      })
}

function addEngineer() {
  inquirer.prompt(questions.engineerQuestions)
    .then(
      data => {
        const engineer = new Engineer(data.id, data.name, data.email, data.github);
        teamArray.push(engineer);
        startMenu();
      })
}

// create team
function writeToFile() {
  if (!fs.existsSync(output_dir)) {
    fs.mkdirSync(output_dir)
  }
  fs.writeFileSync(output_file, render(teamArray), "utf-8");
};




// create team
function writeToFile() {
  if (!fs.existsSync(output_dir)) {
    fs.mkdirSync(output_dir)
  }
  fs.writeFileSync(output_file, render(teamArray), "utf-8");
};






startMenu()



const questions = {
  managerQuestions:
    [
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
      }
    ],
  internQuestions: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is your school?',
    }],
    engineerQuestions: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github?',
      }
  ]
}

