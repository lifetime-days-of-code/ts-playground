/**
 * its somehow like `any` but a little bit more restrictive
 * in type `unknown` we can store any value without getting errors
 * force you to use typecheck before assigning it to a typed variable
 * its better to use union type when you know the expected values
 * it is better than `any`
 */

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Unknown'

if (typeof userInput === 'string') {
  userName = userInput; // works in typecheck
}
// userName = userInput;//Type 'uknown' is not assignable to type 'string';

// function generateError(message: string, code: number):void {
//   throw { message: message, errorCode: code };
// }
/**
 * if we generateError in a variable
 * const result = generateError('An error occured', 500);
 * and
 * console.log(result)
 * we wont get `undefined`
 *This funciton never reproduce a value it stops the execution of the program if is NOT
 * inside a try/catch block 
 * so it is more correc to use `never` and in place of `void`
 * @param message 
 * @param code 
 * 
 */

function generateError(message: string, code: number):never {
  throw { message: message, errorCode: code };
}

generateError('An error occured', 500);