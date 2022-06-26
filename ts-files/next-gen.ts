const nextGenAdd = (a: number, b: number = 1) => a + b;

const printOut: (a: number | string) => void = output => console.log(output);

const nextgGenButton = document.querySelector('button');

if (nextgGenButton) {
  nextgGenButton.addEventListener('click', event => console.log(event))
}


nextGenAdd(5)

const hobbies = ['Pixel art', 'Cooking']
const activeHobbies = ['Fitness']

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  firstName: 'Plamen',
  personAge: 32
}

const copiedPerson = { ...person }
console.log(copiedPerson)


const nextGenAddFlexibl = (...numbers: number[]) => {
  console.log(numbers)
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0)
}


const addedNumbers = nextGenAddFlexibl(5, 10, 2, 3.7);
console.log(addedNumbers)

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, remainingHobbies);

const { firstName: userName, personAge } = person
console.log(userName, personAge)