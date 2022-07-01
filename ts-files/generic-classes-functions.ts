interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got no value'
  }
  else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.'
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there'))
console.log(countAndDescribe(['sports', 'cooking']))
console.log(countAndDescribe([]))

// ~[T]~ should be any kind of object and ~[U]~ should be any kind of key of that object
function extractAndConvewrt<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}


/**
 * console.log(extractAndConvewrt({}, 'name')); 
 * Error msg: Argument of type 'string' is not assignable to parameter of type 'never'
 * because there is no property `name` on the object that we are passing
 * in order to remove the error message we need ot add a valid object
 * console.log(extractAndConvewrt({name: 'Plamen'}, 'name'));
 * This is another way to to tell TypeScript that we want to ensure that we have this 
 * correct structure.
 */
// console.log(extractAndConvewrt({}, 'name')); -> throws an error
console.log(extractAndConvewrt({ name: 'Plamen' }, 'name'));

/**
 * T is like a placeholder for a future type that we will add
 * it can be one of the basic types or a custom type that you created 
 * or generic, union etc.
 * 
 * to make this class flexible we are using generics.
 * Because we may want to create a storage that stores text and another one that stores numbers and another one that stores boths or whatever we want
 * 
 */
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    // the below fixed the bug related to when you pass a non-primitive type value
    // if he method can't find the passed value it will NOT remove an item instead it will simply return
    if(this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Plamen')
textStorage.addItem('Mitev')
textStorage.removeItem('Mitev')
console.log(textStorage.getItems());
//  textStorage.addItem(1) -> throws an error because when where initializing this object we sayd that it will store strings only


const numberStorage = new DataStorage<number>();
numberStorage.addItem(2)
numberStorage.addItem(5)
numberStorage.addItem(100)
numberStorage.removeItem(100);
console.log(textStorage.getItems());

const mixedStorage = new DataStorage<number | string>();
mixedStorage.addItem('Plamen')
mixedStorage.addItem(32)
console.log(mixedStorage.getItems());

const objectStorage = new DataStorage<object>();
let myObject = { name: 'Plamen' }
objectStorage.addItem(myObject)
objectStorage.addItem({ name: 'Mitev' });
/**  
 * this wont work because of the way our logic is implemented
  because we are removing items by looking of his indexof
  and this will work only for primitive values but not for objects because
  object are passed by reference and here we are passing a whole new object
  so what js will do is try to find that adress but it wont be able to because this is a brand new object
 and then it will just remove the last element of that array
*/
objectStorage.removeItem({ name: 'Plamen' }); // -> this won't do anything because we are passing an new object
objectStorage.removeItem(myObject);
console.log(objectStorage.getItems());