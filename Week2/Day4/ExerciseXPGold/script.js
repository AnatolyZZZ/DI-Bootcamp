// Write a program to check whether a string is blank or not.

// console.log(isBlank(''));
// console.log(isBlank('abc')); 

function isBlank (str) {
    if (str === "") {
        return true;
    } else return false;
}
// console.log(abbrevName("Robin Singh")); 
function abbrevName(nameSurname) {
    let arr = nameSurname.split(' ');
    return ( arr[0]+ " " + arr[1][0] + ".");
}

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.
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

// console.log(swapChar('G'));


function swapTheCase (str) {
    let res = "";
    for (ch of str) {
        res += swapChar(ch);
    }
    return res;
}

console.log(swapTheCase("The Quick Brown Fox"));

// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.

function chekArray (arr, cha) {
    for  (ch of arr) {
        if (ch === cha) {
            // console.log(ch);
            return true;
        }
    }
    return false;
}

// console.log(chekArray([8, 2, 2], 3));
function isOmnipresent (arr, cha) {
    for (smallArr of arr) {
        if (!chekArray(smallArr, cha)) {
            return false;
        }
    }
    return true;

}

console.log(isOmnipresent([[6, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]] , 3));
