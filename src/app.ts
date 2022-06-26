class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {

  }

  describe(this: Department) {
    console.log('Department: ' + this.id + ':' + this.name);
  }

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

}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }
  addEmployee(name: string) {
    if(name === "Max") {
      return;
    }

    this.employees.push(name)
  }
  addReports(text: string) {
    this.reports.push(text)
  }
  printReports () {
    console.log(this.reports)
  }
}

const accounting = new AccountingDepartment('d1',[])
accounting.addReports('Something got wrong')
accounting.printReports();

console.log(accounting)
accounting.addEmployee('Plamen')
accounting.addEmployee('Mitev')
accounting.addEmployee('Max')
accounting.addEmployee('Manu')

const it = new ITDepartment('d2', ['Pulmen'])
it.addEmployee('Plamen')
it.addEmployee('Mitev')



console.log(it)
