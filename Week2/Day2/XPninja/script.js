// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

const x = 1988;
const y = 1998;
let year;

if (x <= y) {
    year = (2 * y - x);
} else {
    year = (2 * x - y);
}
console.log(year);

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length
let zip = prompt ("Enter Zip");

const pattern = /\d\d\d\d\d/;
console.log(pattern.test(zip) && zip.length == 5);

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result

let myWord = prompt("enter word")
console.log(myWord);
// myWord = "qwerty"
const pattern2 = /[eyuioa]/
while (myWord != myWord.replace(pattern2,"")) {
    myWord = myWord.replace(pattern2,"");
}
// myWord = myWord.replace(pattern2,"");
console.log(myWord);
// console.log(myWord.indexOf("y"));
myWord = myWord.replace("a","1").replace("e","2").replace("i","3").replace("o","4").replace("u","5");
// console.log(myWord);
