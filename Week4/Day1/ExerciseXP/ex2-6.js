winBattle = () => true;
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.
let experiencePoints;
winBattle() ? experiencePoints = 10 : experiencePoints = 1;
console.log (experiencePoints);

// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output

isString = (arg) =>  typeof(arg) === "string"

// isString = (arg) => {
//     typeof(arg) === "string" ? return true : return false;
// }

console.log(typeof('hello')); 

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

colors.forEach ((value, index) => {
    console.log(`${index + 1 }# choise is ${value}`)
})
colors.some(value => value === "Violet") ? console.log("Yeah") : console.log("No...");

// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

const ordinal = ["th","st","nd","rd"];
const ending = function (i) {
    if (i > 3) {
        return ordinal[0];
    } else {
        return ordinal[i]
    }
}
colors.forEach ((value, index) => {
    console.log(`${index + 1 }${ending(index+1)} choise is ${value}`)
})

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAmount;
const vat = 0.17;
const details = ["+200", "-100", "+146", "+167", "-2900"]

vatcount = (val) => val * (1 + vat);

let sum = 0;
appendAm = function (arg) {
    arg = +arg;
    sum += vatcount(arg);
}


details.forEach(appendAm);

console.log(sum);

