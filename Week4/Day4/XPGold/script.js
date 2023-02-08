// Create a function called printFullName(studentObj) that accepts an object as a parameter.
// For example : printFullName({first: 'Elie', last:'Schoppik'}).
// The function should return a string like the example below

const printFullName  = ({first, last}) => `Your full name is ${first} ${last}`

console.log(printFullName({first: 'Elie', last:'Schoppik'}));

// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.

function myF (obj) {
    let k = Object.keys(obj);
    let v = Object.values(obj);
    return ([k.sort(), v])
}

keysAndValues1 = { a: 1, b: 2, c: 3 }

// ➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues2 = { a: "Apple", b: "Microsoft", c: "Google" }

// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues3 = { key1: true, key2: false, key3: undefined }
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
console.log(myF(keysAndValues3));

class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count++;
    }
  }
  
  const counterOne = new Counter();
  counterOne.increment(); // 1
  counterOne.increment(); // 2
  
  const counterTwo = counterOne; //2
  counterTwo.increment(); // 3
  
  console.log(counterOne.count); // 3