// interface Pesron {
//   name: string;
//   age:number;

//   greet(pharese: string): void
// }

// let user1: Pesron;

// user1 = {
//   name: 'Plamen',
//   age: 3,
//   greet(phrase:string) {
//     console.log(phrase + ' ' + this.name)
//   }
// }

// user1.greet('Hi there')

// type AddFn = (a:number, b:number) => number
interface AddFn {
  (a:number,b:number):number
}

let add: AddFn;

add = (n1: number, n2:number)  => {
  return n1 + n2;
}
interface Named {
  readonly name: string; // can't be changed after it's initialized
  outputName?: string;
}
//You can extend with more than one interface. The must be separated by coma
interface Greetable  extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;
user1 = new Person('Plamen');
//user1.name = 'Mitev'// trows an error because name is readonly

user1.greet('Hi there I am ');
console.log(user1)