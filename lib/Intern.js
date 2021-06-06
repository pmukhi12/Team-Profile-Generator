const Employee = require("./Employee");

class Intern extends Employee{
    constructor (id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }

    // get School
    getSchool() {return this.school;}

    // getRole()-returns 'Intern
    getRole() {return 'Intern';}

}

module.exports = Intern