// complete this js code
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Inherit from Person prototype using Object.create
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.jobGreet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Set the constructor of Employee back to Employee
Employee.prototype.constructor = Employee;

// Example usage:
const person = new Person("John", 30);
person.greet();

const employee = new Employee("Jane", 25, "Software Developer");
employee.greet();
employee.jobGreet();
