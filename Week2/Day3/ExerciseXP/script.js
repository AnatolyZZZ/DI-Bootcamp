const people = ["Greg", "Mary", "Devon", "James"];
// exercise 1
people.splice(0,1);

people.splice(2,1,"Jason")

people.push("Anatoly");

console.log(`Mary's index is ${people.indexOf("Mary")}`);

let people2 = people.slice(1,(people.length-1));

console.log(people.indexOf("Foo"));

let last = people[people.length - 1];

console.log(last);

// exercise 1 part 2
// Using a loop, iterate through the people array and console.log each person.

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” . 
// Hint: take a look at the break statement in the lesson.

for (let a = 0; a < people.length; a++) {
    console.log(people[a]);
    if (people[a]==="Jason") {
        break;
    }
}

// exercise 2 
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

const colors = ["red", "orange", "yellow", "green", "blue" ];
const endings = ['st', 'nd', 'rd', 'th']

for (let u = 0; u < colors.length; u++) {
    let endOf; 
    if (u < endings.length) {
        endOf= endings[u]; } else {
            endOf = "th"
        }
   
    console.log(`My ${u+1}${endOf} choise is ${colors[u]}`);
}

// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
let num = 9;
while ( num <10) {
    num = prompt("give me a number");
    num =+num;
}
console.log(num);

// ex 4
// Copy and paste the above object to your Javascript file.
// Console.log the number of floors in the building.
// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment. 

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1]);
let name1 = building.nameOfTenants[1].toLowerCase();
console.log(name1);
console.log(building.numberOfRoomsAndRent[name1][0]);


if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] += 1200;
}

// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

const family = {
    father : "papa",
    mother : "mama",
    son : 'kid',
}

for (key in family) {
    console.log(key);
}

for (key in family) {
    console.log(family[key]);
}

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let answer ="";
for (key in details) {
    answer += key;
    answer +=" ";
    answer += details[key];
    answer +=" ";
} 
console.log(answer.trim());

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let secret = []; 

for (nm of names) {
    secret.push(nm[0]);
}

secret.sort();

const res = secret.join('');

console.log(res);