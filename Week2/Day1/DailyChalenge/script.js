const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// remove 1-st elt
fruits.shift();

// sort alphabeticaly
fruits.sort();

// add to the end
fruits.push("Kiwi");

// remove apples

let ind = fruits.indexOf("Apples");
fruits.splice(ind,1);
fruits.reverse();

console.log(fruits);


// exercise 2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1][0]);