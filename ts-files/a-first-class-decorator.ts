function Logger(target:Function) {
  console.log('Loggging...')
  console.log(target);
}


@Logger
class Person {
  name = 'Plamen';

  constructor() {
    console.log('Creating person object');
  }
}

const person = new Person();
console.log(person)