function identity<T>(arg: T): T {
  if (typeof arg === 'string') {
    console.log(arg.length);
    return arg;
  }
  return arg;
}

function identity1<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg;
}

function identity2<T>(arg: T): T {
  return arg;
}

// let myIdentity = () => {}
let myIdentity: <Type>(arg: Type) => Type = identity;

/**  
* We could also use a different name for the generic type
* parameter in the type, so long as the number of type variables
* and how the type variables are used line up 
* myIdentity is the same as myIdentity1
*/

let myIdentity1: <Identity>(arg: Identity) => Identity = identity;


function identitiFync<Type>(args:Type): Type {
  return args
}

let myIdentityFunc: {<Type>(args:Type):Type} = identitiFync;