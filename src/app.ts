
// we can achive the same with interfaces and extends
// Intersection Types
type Admin = {
  name: string;
  privilages: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Plamen',
  privilages: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// ======================= Type Guards =======================
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfromation(emp: UnknownEmployee) {
  console.log('Name: ', emp.name)
  // checks if `emp` obj has `privilages` property
  if ('privilages' in emp) {
    console.log('Privilages: ' + emp.privilages)
  }
  if ('startDate' in emp) {
    console.log('startDate: ' + emp.startDate)
  }
}

printEmployeeInfromation({ name: 'Plamen', startDate: new Date() })


class Car {
  drive() {
    console.log('Driving ....')
  }
}

class Truck {
  drive() {
    console.log('Driving a truck ....')
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount)
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {

  vehicle.drive();
  // if('loadCargo' in vehicle) {
  // we can use instance of only if we used classes to construct the type Vehicle
  // if we had used interfaces we woudn't be able to  check if vehicle was an instance of Truck
  // because after compiling the ts file interfaces are strpt down from the js code
  if (vehicle instanceof Truck) {
    console.log(vehicle)
    vehicle.loadCargo(1000)
  }
}


// ======================= Discriminated Union =======================
// its a pattern that makes implementing type guards easier
// its available when you work with object types
// the `type` string in the interfaces gives name to whom you can reffer in your type guards. 
interface Bird {
  type: 'bird',
  flyingSpeed: number;
}

interface Horse {
  type: 'horse',
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  console.log('Moving with speed: ' + animal)
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed:' + speed)
}

moveAnimal({ type: 'bird', flyingSpeed: 10 })

// ======================= Type Casting =======================


// const userInputElement = <HTMLInputElement>document.getElementById('user-input');


// this object is 
// possible null we can fix that with an ! mark.
const userInputElement = <HTMLInputElement>document.getElementById('user-input') as HTMLInputElement;// this object is 
userInputElement.value = 'Hi There'