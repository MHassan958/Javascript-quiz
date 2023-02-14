class Employee {
  constructor() {
    this._id = "";
    this._name = "";
    this._department = "";
    this._salary = "";
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get department() {
    return this._department;
  }

  set department(value) {
    this._department = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    this._salary = value;
  }
}

// create 3 employee objects
const employee1 = new Employee();
employee1.id = "001";
employee1.name = "John Doe";
employee1.department = "IT";
employee1.salary = "$50,000";

const employee2 = new Employee();
employee2.id = "002";
employee2.name = "Jane Doe";
employee2.department = "Sales";
employee2.salary = "$60,000";

const employee3 = new Employee();
employee3.id = "003";
employee3.name = "Bob Smith";
employee3.department = "Marketing";
employee3.salary = "$70,000";

// display all properties of all 3 employees
console.log("Employee 1:");
console.log("ID: " + employee1.id);
console.log("Name: " + employee1.name);
console.log("Department: " + employee1.department);
console.log("Salary: " + employee1.salary);
console.log();

console.log("Employee 2:");
console.log("ID: " + employee2.id);
console.log("Name: " + employee2.name);
console.log("Department: " + employee2.department);
console.log("Salary: " + employee2.salary);
console.log();

console.log("Employee 3:");
console.log("ID: " + employee3.id);
console.log("Name: " + employee3.name);
console.log("Department: " + employee3.department);
console.log("Salary: " + employee3.salary);
console.log();
