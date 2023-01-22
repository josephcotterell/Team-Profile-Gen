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
        message: "what is the manager email address?"


    }

  });
};
