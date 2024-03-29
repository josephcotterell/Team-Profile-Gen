const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
    this.id = id;
  }

  getID() {
    return this.id;
  }
  getSchool() {
    return this.school;
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
