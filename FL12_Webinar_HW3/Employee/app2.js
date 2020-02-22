
class Employee {
    constructor(obj) {
        this.id = obj.id;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.birthday = obj.birthday;
        this.salary = obj.salary;
        this.position = obj.position;
        this.department = obj.department;
        this._getAge_ = () => {
            const dateNow = new Date();
            const emplBirthday = new Date(Date.parse(this.birthday));
            return dateNow.getYear() - emplBirthday.getYear();
        }
        this._fullName_ = () => `${this.firstName} ${this.lastName}`;
        Employee.registrEMPLOYEES(this);
    }

    static EMPLOYEES = [];
    static registrEMPLOYEES(empl) {
        Employee.EMPLOYEES.push(empl);
    }

    get age() { return this._getAge_() };
    get fullName() { return this._fullName_() };
    get EMPLOYEES() {
        return this.EMPLOYEES;
    }

    quit() {
        if (Employee.EMPLOYEES.includes(this)) {

            let index = Employee.EMPLOYEES.indexOf(this)
            Employee.EMPLOYEES.splice(index, 1)
        }
    }

    retire() {
        this.quit();
        console.log('It was such a pleasure to work with you!');
    }

    getFired() {
        this.quit();
        console.log('Not a big deal!');
    }

    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }

    changePosition(newPosition) {
        this.position = newPosition;
    }

    changeSalary(newSalary) {
        this.salary = newSalary;
    }

    getPromoted(benefits) {

        benefits.salary ? changeSalary(benefits.salary) : null

        benefits.position ? changePosition(benefits.position) : null;

        benefits.department ? changeDepartment(benefits.dapartment) : null;

        console.log('Yoohooo!');
    }

    getDemoted(punishment) {

        punishment.salary ? this.changeSalary(punishment.salary) : null;

        punishment.position ? this.changePosition(punishment.position) : null;

        punishment.department ? this.changeDepartment(punishment.department) : null;

        console.log('Damn!');
    }
}


class Manager extends Employee {
    constructor(obj) {
        super(obj);
        this.position = 'manager';
    }
    get managedEmployees() {

        return Employee.EMPLOYEES.filter(employee => employee.department === this.department && employee.position != 'manager');
    }
}

class BlueCollarWorker extends Employee {
    constructor() {
    }
}

class hrManager extends Manager {
    constructor() {
        super(obj);
        this.department = 'hr';
    }
}

class SaleManager extends Manager {
    constructor() {
        super(obj);
        this.department = 'sales';
    }
}

// ----------------------Task_03------------------------



function ManagerPro(manager, obj) {
    Object.assign(manager, obj)
}
