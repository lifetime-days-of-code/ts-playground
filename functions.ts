function add(n1: number, n2: number): number {
  return n1 + n2;
}


function printResults(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1:number, n2:number, cb: (a:number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResults(add(5, 12));

// return undefined
function exitFunction(bul: boolean): undefined {
  return
}

// Functions as types
let combineValues: (a:number, b:number) => number;

// let combineValues: Function;
combineValues = add;
// combineValues = printResults;
// combineValues = 5;
console.log(combineValues(8, 8))

addAndHandle(10,20,(result) => {
  console.log(result)
})