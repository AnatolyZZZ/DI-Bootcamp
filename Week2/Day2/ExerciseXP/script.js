// ex 1
// Create 2 variables, x and y. Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger.

let x = 12;
let y = 13;
if (x > y) {
    console.log("X is greater");
} else if (y > x) {
    console.log("Y is greater");
} else {
    console.log("They are equal");
}
// ex 2
// Create a variable called newDog where it’s value is “Chihuahua”.
// Check and display how many letters are in newDog.
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog == "Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed");
} else {
    console.log("I dont care, I prefer cats");
}

//ex3
let num = prompt("give me a number");
num =+num;
if (num%2 === 0) {
    console.log(`${num} is even`)
} else if (num%2 === 1){
    console.log(`${num} is odd`)
} else console.log(`${num} is not integer`)

// ex 4 
// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// For example, if there are 5 users, it should display:

const users = ["Lea123", "Princess45", /*"cat&doglovers", "helooo@000"*/];

switch (users.length) {
    case 0: {
        console.log("no one is online");
        break;
    }
    case 1: {
        console.log(`${users[0]} is online`);
        break;
    }
    case 2: {
        console.log(`${users[0]} and ${users[1]} is online`);
        break;
    }
    default: {
        let moreUsers = users.length - 2;
        console.log(`${users[0]}, ${users[1]} and ${moreUsers} more are online`);
    }
}