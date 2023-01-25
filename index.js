const inquirer = require("inquirer");
const fs = require("fs");

//team profiles
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

//generate HTML
const generateHTML = require("./src/generateHTML");
const { default: inquirer } = require("inquirer");
const { type } = require("os");

//team
const team = [];

//add manager prompts
const addManager = () => {
  return inquirer.prompt({

    {
    type: "input",
    name: "name",
    message: "what is the name of the manager?",
    },

    {
    type: "input",
    name: "ID",
    message: "what is the manager employee ID?",

    },

    {
        type: "input",
        name: "email",
        message: "what is the manager email address?",


    },

    {
type: "input",
name: "manager office number",
message: "what is the manager office number?",


    },

).then ((answers) => {
const newManager = new Manager (
answers.managerName,
answers.managerID,
answers.managerEmail,
answers.managerOfficeNumber,

);

teamManagerName = answers.managerName;
teamMembers.push(newManager);
menu()

const addEmployee = () => {
    console.log(`
    Add employee`);

return inquirer.prompt({
    type: 'list',
    name: 'role',
    message:'please choose the employees role',
    choices: ['Engineer, Intern,']


});


    
})
};
