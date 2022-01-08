/*
ALGORITHM
  - Given two objects
  - Iterate through the keys in object one
    - Return false if the current key (from object one) is not already a property in
    - Return false if the value in object one that corresponds to the current key does not 
      equal the value in object two that corresponds to the current key

  - Return true
*/

function objectsEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for(let key in obj1) {
    if (!Object.keys(obj2).includes(key) || obj1[key] !== obj2[key]){
      return false;
    }
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false