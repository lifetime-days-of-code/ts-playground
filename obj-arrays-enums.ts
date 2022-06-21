// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Plamen',
//   age: 32,
//   hobbies: ['Pixel art', 'Cooking']
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[], // array of strings
//   role: [number, string] // Tuple
// } = {
//   name: 'Plamen',
//   age: 32,
//   hobbies: ['Pixel art', 'Gaming'],
//   role: [2, 'author']
// };
// ************** Tuples ************** \\
/**
* Tuples
* Fixed-length and type array
{
  ...
  role: [2, 'author'];
  ...
} 
*! Typescript catch the bottom snippet.
* person.role[1] = 10; // Type 'number' is not assignambe to type 'string'
*! But is not catching the next one.
* person.role.push('admin') // This will compile without errors.
*/

// let favoriteActivities: string[];
// favoriteActivities = ['Family time']

// for (const hobby of person.hobbies) {
//   console.log(hobby);
// }

// console.log(person);


// ************** Enums ************** \\

// js land
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
/**
* enum Role {FIGHTER = 5, HUNTER, ROGUE, RANGER, MAGE}
* The above enum starts counting from 5, so HUNTER is = 6
* enum Role {FIGHTER = 5, HUNTER=100, ROGUE=200, RANGER="RANGER", MAGE}
* The above enum starts counting from 5, so HUNTER is = 6
*/

enum Role {
  FIGHTER, HUNTER, ROGUE, RANGER, MAGE
}

const person = {
  name: "Frodo",
  age: 50,
  hobbies: ["Pipe-weed", "Destroying rings"],
  role: Role.ROGUE
}