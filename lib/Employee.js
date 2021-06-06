class Employee {
    constructor (id, name, email) {
        this.id  = id ;
        this.name  = name ;
        this.email = email ;
    }


    // getId()
    getID() {return this.id;}


    // getName()
    getName() {return this.name;}


    // getEmail()
    getEmail() {return this.email;}


    // getRole()-returns 'Employee
    getRole() {return 'Employee';}

}

module.exports = Employee