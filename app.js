/**
 * its somehow like `any` but a little bit more restrictive
 * in type `unknown` we can store any value without getting errors
 * force you to use typecheck before assigning it to a typed variable
 * its better to use union type when you know the expected values
 * it is better than `any`
 */
var userInput;
var userName;
userInput = 5;
userInput = 'Unknown';
if (typeof userInput === 'string') {
    userName = userInput; // works in typecheck
}
// userName = userInput;//Type 'uknown' is not assignable to type 'string';
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured', 500);
