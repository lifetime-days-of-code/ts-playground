function Logger(logString: string) {
  return function (target: Function) {
    console.log(logString)
    console.log(target);
  }
}


@Logger('LOGGING - PERSON')
class Person {
  name = 'Plamen';

  constructor() {
    console.log('Creating person object');
  }
}

const person = new Person();
console.log(person)