interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T):[T, string] {
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