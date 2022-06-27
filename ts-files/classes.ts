abstract class Department {
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {

  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}


class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe(): void {
    console.log('IT department' + this.id)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found')
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('You must provide a value')
    }
    this.addReports(value)
  }
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0]
  }

  static getInstance() {
    if (this.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment('h1', []);
    return this.instance
  }

  describe() {
    console.log('Accounting Department - ID:' + this.id)
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }

    this.employees.push(name)
  }
  addReports(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }
  printReports() {
    console.log(this.reports)
  }
}

// const accounting = new AccountingDepartment('d1',[])
// We can't use the abouve line becaues we turned AccountingDepartment constructor into
// private constructor in order to use the singleton pattern. Meaning that
// we can have only one instance of AccountingDepartment
const accounting = AccountingDepartment.getInstance();

const accounting2 = AccountingDepartment.getInstance();

accounting.addReports('Something got wrong')
// accounting.mostRecentReport = ''; // throws an error that we must provide a valid value;
accounting.mostRecentReport = 'Last report'; // throws an error that we must provide a valid value;

// accounting.printReports();
accounting.describe()

console.log(accounting)
accounting.addEmployee('Plamen')
accounting.addEmployee('Mitev')
accounting.addEmployee('Max')
accounting.addEmployee('Manu')

const employee1 = Department.createEmployee('Plamen Mitev');
console.log(employee1)

const it = new ITDepartment('d2', ['Pulmen'])
it.addEmployee('Plamen')
it.addEmployee('Mitev')
it.describe()


console.log(it)
