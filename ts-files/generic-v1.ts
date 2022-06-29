

// Generics
/**
 * Array<string> === string[]
 * Array<string> is a generic type which means 
 * its a Type which is connected to another type.
 * where we want to know which out type debt is. So
 * that can typescript give us better support.
 * Because if here for example, if we know that what we store
 * there will be a string, then whe know wheneever I access and element in a that array I can call all things that string is 
 * capable off.
 */
// const names:Array<string> = ['Plamen', 'Mitev']; // string[]
//  names[0].split('')

//  const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(()=> {
//     resolve(10)
//   }, 2000)
//  })


//  promise.then(data =>
//   // data.split()
// );

function identity0(arg: number): number {
  return arg;
}

function identity<T>(arg: T): T {
  return arg;
}
// function identity<string>(arg: string) :string
let output = identity<string>('myString'); 

// function identity<myString>(arg: 'myString') :myString
let output2 = identity('myString');

// function identity<number>(arg: number) :number
let output3 = identity<number>(3);

// function identity<3>(arg: 3) :3
let output4 = identity(3);

console.log(output)
console.log(output2)
console.log(output3)
console.log(output4)