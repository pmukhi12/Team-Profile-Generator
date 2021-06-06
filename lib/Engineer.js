const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }

    // get github
    getGithub() {return this.github}

    // getRole()-returns 'Engineer
    getRole() {return 'Engineer';}

}

module.exports = Engineer