// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>


const favFood = "pankakes";
const favMeal = "breakfast";

console.log(`I eat ${favFood} at every ${favMeal}`);

// ex2 p1
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
myWatchedSeriesSentence = "black mirror, money heist, and the big bang theory";

console.log(`I wached 3 series: ${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`);

console.log(`I wached 3 series: ${myWatchedSeriesSentence}`);

// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

myWatchedSeries.splice(2, 1, "friends");
// console.log(myWatchedSeries);
myWatchedSeries.unshift("New serial");
myWatchedSeries.splice(1, 1);
// console.log(myWatchedSeries);
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);

// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

let celTemp = 22;
let farTemp = celTemp / 5 * 9 + 32
console.log(`${celTemp}°C is ${farTemp}°F`)

// Exercise 4
    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: 23
    // Actual: 23

    // c is undfefined

    console.log(3 + 4 + '5');
    // Prediction: 345
    // Actual: 75

    // Exercise 5

    console.log(typeof(15));
// Prediction: number
// Actual: number

console.log(typeof(5.5))
// Prediction: number
// Actual: number

console.log(typeof(NaN))
// Prediction: undefined
// Actual: number

console.log(typeof("hello"))
// Prediction: string
// Actual:

console.log(typeof(true))
// Prediction: bool
// Actual: boolean

console.log (typeof(1 != 2))
// Prediction: boolean
// Actual: boolean

console.log("hamburger" + "s")
// Prediction: "humburgers"
// Actual: "humburgers"

console.log ("hamburgers" - "s")
// Prediction: error
// Actual: NaN

console.log("1" + "3")
// Prediction: 13
// Actual: 

console.log ("1" - "3")
// Prediction: NaN
// Actual: -2

console.log ("johnny" + 5)
// Prediction: johnny5
// Actual: johnny5

console.log ("johnny" - 5)
// Prediction: NaN
// Actual: NaN

console.log (99 * "hello")
// Prediction: no predictions every language differs
// Actual: NaN

console.log (1 != 1)
// Prediction: false
// Actual: false

console.log (1 == "1")
// Prediction: true cause tipy doesnt count
// Actual:

console.log (1 === "1")
// Prediction: false cause different types
// Actual: false

// Exercise 6 

console.log(5 + "34")
// Prediction: 39 js seems to convert types
// Actual: 534

console.log(5 - "4")
// Prediction: NaN
// Actual: 1

console.log(10 % 5)
// Prediction: 0
// Actual: 0

console.log (5 % 10)
// Prediction: 5 
// Actual: 5

console.log("Java" + "Script")
// Prediction: JavaScript 
// Actual: JavaScript

console.log(" " + " ")
// Prediction: "  "
// Actual: ""

console.log(" " + 0)
// Prediction: " 0"
// Actual: " 0"

console.log(true + true)
// Prediction:  true
// Actual: 2

console.log(true + false)
// Prediction: true 
// Actual: 1

console.log(false + true)
// Prediction: 1
// Actual: 1

console.log(false - true)
// Prediction: -1
// Actual: -1

console.log(!true)
// Prediction: false
// Actual: false

console.log(3 - 4)
// Prediction: -1
// Actual: - 1

console.log("Bob" - "bill")
// Prediction: NaN
// Actual: NaN