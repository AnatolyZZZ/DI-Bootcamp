// Greet the user with his name, the user's name is a parameter. Do this exercise,
// first by using function declarations
// then function expression,
// then arrow function

function greet (username) { 
    console.log(`hello ${username}`);
}

const greet2 = (username) => {
    console.log(`hello ${username}`);
}
const greet3 = function (username)  {
    console.log(`hello ${username}`);
}

// Exercise 1
const prices = [10, 23, 5];
// 1. Using a normal for loop, find the sum of the array
// 2. Using the for each method, find the sum of the array
// Exercise 2
const ageClient = [5, 8, 40, 18];
// Use the some method to check if there is at least one adult in the array (ie. age bigger or equal to 18)
// If there is, alert him that he is in charge of the others
// Use the every method to check if all the users are adults (ie. age bigger or equal to 18)
// If there not, alert them that they have a price reduction
let s = 0;
prices.forEach((val) => s+= val);
console.log(s);

console.log(ageClient.some(val => val>=18));