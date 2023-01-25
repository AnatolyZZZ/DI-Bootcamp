// ex 1
// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

function infoAboutMe () {
    console.log("I'm Tolya and I'm 34");
}
infoAboutMe();

// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, you are ${personAge} years old, yout favorite color is ${personFavoriteColor}`);
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// 🌟 Exercise 2 : Tips

// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
// Create a function named calculateTip() that takes no parameter.
// Inside the function, use prompt to ask John for the amount of the bill. 
// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.
// Console.log the tip amount and the final bill (bill + tip).
// Call the calculateTip() function.

function calculateTip() {
    let bill = prompt("Whay is amount of bill?");
    bill =+bill;
    let tips = 0;
    if (bill < 50) {
        tips = 0.2*bill;
    } else if (bill >= 50 && bill < 200 ) {
        tips = 0.15*bill;
    }  else if (bill >= 200) {
        tips = 0.1*bill;
    }
    console.log(`Tips are ${tips} and total is ${tips+bill}`);
}

calculateTip();

// 🌟 Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.
// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

// Bonus: Add a parameter divisor to the function.

function isDivisible(divisor) {
    let sum = 0;
    let arr = [];
    for (let i = 0; i < 501; i++) {
        if (i % divisor === 0) {
            arr.push(i);
            sum += i;
        }
    }
    console.log(arr.join(' '));
    console.log(sum);
}

isDivisible(23);

// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters. 

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
    sum = 0;
    for (const item of shoppingList) {
        if (item in stock && stock[item] != 0) {
            sum += prices[item];
            stock[item]--;
        }
    }
    return (sum);
}

console.log(myBill());
// console.log(stock);

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.

function changeEnough(itemPrice, amountOfChange) {
    let sum = 0;
    const value = [0.25, 0.10, 0.05, 0.01];
    for (let i = 0; i < 4; i++) {
        sum += value[i]*amountOfChange[i];
        // console.log(value[i]*amountOfChange[i]);
    }
    if (sum >= itemPrice) {
        return true;
    } else {
        return false;
    }
}

console.log(
    changeEnough(4.25, [25, 20, 5, 0]),
    changeEnough(14.11, [2,100,0,0]),
    changeEnough(0.75, [0,0,20,5])
    );

// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel. 

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$ 

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental. 

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z. 
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

function hotelCost() {
    let nights = NaN;
    while (nights != nights || nights === null) {
        nights = prompt("How many nights?"); 
        if (nights != null) {
            nights = +nights;
        }
        // console.log(nights);
        // console.log(typeof(nights));
        if (nights === "stop") {
            break;
        }
    }
    return nights * 140;
};

function rentalCarCost() {
    let nights = NaN;
    while (nights != nights || nights === null) {
        nights = prompt("How many days car rent?"); 
        if (nights != null) {
            nights = +nights;
        }
        // console.log(nights);
        // console.log(typeof(nights));
        if (nights === "stop") {
            break;
        }
    }
    let k = 1;
    if (nights > 10) {
        k = 0.95;
    }
    return nights * 40 * k;
};

flightPrice = {
 "London" : 183,
 "Paris" : 220,
}

function planeRideCost() {
    let destination = "Lo ndon";
    const pattern = /\d|W|\s|_/
    //this pattern tests for any digit or space or any other special caracter);
    while (pattern.test(destination)) {
        // console.log(pattern.test(destination));
        destination = prompt("what is your destination?");
        if (destination === "stop") {
            break; // this is for case I acidentaly make infinate loop
        }
    }
    if (destination in flightPrice) {
        return flightPrice[destination]
    } else return 300;
}

function totalVacationCost () {
    return hotelCost() + planeRideCost() + rentalCarCost();
}
// console.log(hotelCost());
// console.log(planeRideCost());
// console.log(rentalCarCost());

console.log(totalVacationCost());