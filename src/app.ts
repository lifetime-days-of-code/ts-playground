class Department {
  public name: string;
  public employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  // `this: Department` -> when DESCRIBE is executed, `this` inside of DESCRIBE
  // should always refer to an instance that's based on department class
  // so an object of which in the end would be of type department

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department('Accounting')

console.log(accounting)
accounting.describe()

//here we are creating a copy of just the method but not the name property
// thats why it will return undefined
const accountingCopy = { describe: accounting.describe };
// below we are getting an error because we are NOT calling .describe on
// instance of the Department object 
// accountingCopy.describe();

const accountingCopy2 = { 
  name: 'dummy department',
  describe: accounting.describe, 
  addEmployee: accounting.addEmployee,
  printEmployeeInformation:accounting.printEmployeeInformation, 
  employees: ['Dummy employee1', 'Dummy employee2'] 
};

accountingCopy2.describe()
accountingCopy2.addEmployee('Dummy employee3')
accountingCopy2.printEmployeeInformation()

accounting.addEmployee('Plamen')
accounting.addEmployee('Mitev')

// accounting.employees[3] = 'Ventsislavov'; -> lets block this functionality with access modifiers
// add `private` keyword infront of employees in Department class

accounting.describe()
accounting.printEmployeeInformation()