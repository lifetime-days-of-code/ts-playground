/**
 * Union types
 */
function combine(input1: number | string, input2: number | string): string | number {
  var result: string | number;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26);
console.log(combineAges)
const combineNames = combine('Bilbo', ' Baggins');
console.log(combineNames)

/**
* Literal types
*/

function combine2(
  input1: number | string,
  input2: number | string,
  // resultConversion: string
  resultConversion: 'as-text' | 'as-number' // Combination between union and literal types
) {

  var result;

  // if (typeof input1 === 'number' && typeof input2 === 'number') {
  //   result = input1 + input2;
  // } else {
  //   result = input1.toString() + input2.toString();
  // }

  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combineAges2 = combine2(30, 26, 'as-number');
console.log(combineAges2)
const combineStringAges2 = combine2('30', '26', 'as-number');
console.log(combineStringAges2)
const combineNames2 = combine2('Bilbo', ' Baggins', 'as-text');
console.log(combineNames2)


/**
* Custom types
*/

type Combinable = number | string;
type ConversionDescriptor = 'as-text' | 'as-number';

function combine3(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {

  var result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combineAges3 = combine2(30, 26, 'as-number');
console.log(combineAges3)
const combineStringAges3 = combine2('30', '26', 'as-number');
console.log(combineStringAges3)
const combineNames3 = combine2('Bilbo', ' Baggins', 'as-text');
console.log(combineNames3)
