// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.
let x = Math.floor(Math.random() * 100) + 1;
arr = [];
for (let i = 0; i < x + 1; i++ ) {
    if (i % 2 === 0) {
        arr.push(i);
    } 
}
console.log(arr.join(' '));

// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
function swapChar (cha) {
    if (/[A-Z]/.test(cha)) {
        return (cha.toLowerCase());
    }
    if (/[a-z]/.test(cha)) {
        return (cha.toUpperCase());
    }
    if (/\s/.test(cha)) {
        return (' ');
    }
}

function smth (str) {
    res = "";
    arr = [];
    for (i in str) {
        if (i % 2 === 0) {
            res += swapChar(str[i]);
        } else {
            res += str[i];
        }
    }
    arr.push(res);
    res = "";
    for (i in str) {
        if (i % 2 === 1) {
            res += swapChar(str[i]);
        } else {
            res += str[i];
        }
    }
    arr.push(res);

    return (arr);
}

console.log(smth("scecgwicksjcgwi"));

function isPalindrom (str) {
    let arr = str.split("");
    return arr.join() === arr.reverse().join();
}
console.log(isPalindrom("ghhg"));

function biggestNumberInArray(arrayNumber) {
    let res = Number.NEGATIVE_INFINITY;
    for (i of arrayNumber) {
        i = +i;
        // console.log(i);
        if (i === NaN) {continue};
        if (i > res) {
            res = i;
        }
    }
    if (res = Number.NEGATIVE_INFINITY) {
        return 0;
    }
    return res;
}
const array1 = [-1,0,3,100, 99, 2, 99] ;// should return 100 
const array2 = ['a', 3, 4, 2]; // should return 4 
const array3 = []; // should return 0
console.log(biggestNumberInArray(array3));

function newList (arr) {
    res = [];
    for (elt of arr) {
        if (res.indexOf(elt) === -1) {
            res.push(elt);
        }
    }
return res;
}

console.log(newList([1,2,3,3,3,3,4,5,3,1,5]));