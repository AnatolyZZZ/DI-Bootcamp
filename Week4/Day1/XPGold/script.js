// Write a JavaScript program to find the sum of all elements in an array.

const sample = [0, 1, 2, 3, 4, "5", 6];


const ss = (sample) => {
sum = 0;
    for (n of sample) {
    n = +n;
    sum += n;
}
return sum;
}
console.log(ss(sample));
// Write a JavaScript program to remove duplicate items in an array.
const sample2 = [0, 1, 2, 3, 3, 4, 4, 4, 4, 6, 1, 4];

const sample3 = [1, 1, 1]

const remDup = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            } 
        }
    }
} 
remDup(sample3);
console.log(sample3);

// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.

const remShit = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            arr.splice(i, 1);
            i--;
        }
    }
}
const sample4 = [NaN, 0, 15, false, -22, '',undefined, 47, null];
remShit(sample4);
console.log(sample4);

// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:

const rep = function (str, num) {
    res = "";
    for (i = 0; i< num; i++) {
        res += str;
    }
    return res;
}

console.log(rep("Ha", 5));

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle = turtle.padStart(9)
rabbit = rabbit.padStart(9)
console.log(startLine);
console.log(turtle);
console.log(rabbit)
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);