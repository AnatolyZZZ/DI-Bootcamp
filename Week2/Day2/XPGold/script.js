// let lang = prompt ("what language do you speak?");
// lang = lang.toLowerCase();

// switch(lang) {
//     case "french" :{
//         console.log("Bonjour");
//         break;
//     }
//     case "english" :{
//         console.log("Hello");
//         break;
//     }
//     case "hebrew" : {
//         console.log("Shalom");
//         break;
//     } default : {
//         console.log("01110011 01101111 01110010 01110010 01111001");
//     }
// }

// Ask the user for their grade.

// If the grade is bigger than 90, console.log “A”

// If the grade is between 80 and 90 (included), console.log “B”
// If the grade is between 70(included) and 80 (included), console.log “C”
// If the grade is lower than 70, console.log “D”

// let grade = prompt ("What is your grade");
// grade =+grade;
// let letter; 
// console.log(grade);
// if (grade > 90) {
//     letter = "A";
// } else if (80 < grade && grade <= 90) {
//     letter = "B";
// } else if (70 <= grade && grade <= 80) {
//     letter = "C"; 
// } else if (grade < 70) {
//         letter = "D"; }

// console.log(letter);

// Prompt the user for a string. It must be a verb.
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.

let myString = prompt("enter verb");
const l = myString.length;
const ending = myString.slice(l-3);

if (l>= 3 && ending !== "ing") {
    myString += "ing"
}
if (l > 3 && ending === "ing") {
    myString += "ly"
}

console.log(myString);