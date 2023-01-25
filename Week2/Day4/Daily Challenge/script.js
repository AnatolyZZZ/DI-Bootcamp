// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you: 
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

let words = prompt("write the words separeted with space");

let myarr =  words.split(',');

maxLength = myarr[0].length;

for (let i = 0; i < myarr.length; i++) {
    myarr[i] = myarr[i].trim();
}

for (let i = 0; i < myarr.length; i++) {
    if (myarr[i].length > maxLength) {
        maxLength = myarr[i].length;
    }
}

console.log("*".repeat(maxLength+4));

for (word of myarr) {
    let nSpaces = maxLength - word.length;
    console.log("* "+word+" ".repeat(nSpaces)+" *")
}
console.log("*".repeat(maxLength+4));
// test, string, wwevre, idcer, cw   ,   iwevg, acbhw