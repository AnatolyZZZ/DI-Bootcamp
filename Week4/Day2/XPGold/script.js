let landscape = () => {

    let result = "";
   
    let flat = (x) => {
      for(let count = 0; count<x; count++){
        result = result + "_";
      }
    }
   
    let mountain = (x) => {
      result = result + "/"
      for(let counter = 0; counter<x; counter++){
        result = result + "'"
      }
      result = result + "\\"
    }
   
    flat(4); // ____/''''\\____
    mountain(4);
    flat(4)
   
    return result;
   }
   
   console.log(landscape())
   

const addTo = x => y => x + y;
const addToTen = addTo(10);
console.log(addToTen(3)); // addTo (10) : y => 10 + y // 3 => 13

// const curriedSum = (a) => (b) => a + b
// console.log(curriedSum(30)(1)) // cs(30) : (b) => 30 + b //cs(30)(1) 1 => 31

// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5) // add5 = (b) => b + 5
// console.log(add5(12)) // add(12) : 12 => 12 + 5

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log(compose(add1, add5)(10)) // add1(add5(10) => 16
