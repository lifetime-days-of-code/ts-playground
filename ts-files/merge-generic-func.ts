// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB)
// }

// const mergeObg = merge({name:'Plamen'}, {age: 32})


function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergeObg = merge({ name: 'Plamen' }, { age: 32 })
// the below is redundant because typescript inferes the types
const mergeObg1 = merge<{ name: string }, { age: number }>({ name: 'Plamen' }, { age: 32 })
// the below will fail silently because when you pass a non-object
// value to Object.assign js fails silently
const mergeObg2 = merge({ name: 'Plamen' }, 30)

console.log(mergeObg.age)

// we are sayig that T and U can be any type of object
function constraintedMerge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

// const constrMergeObj = constraintedMerge({name:'Plamen'}, 30) // this will fail because the second ardugment is a number
// we need our two parameters to be object because of Object.assign
const constrMergeObj = constraintedMerge({ name: 'Plamen' }, { age: 32, born: 1989 }) 
console.log(constrMergeObj)