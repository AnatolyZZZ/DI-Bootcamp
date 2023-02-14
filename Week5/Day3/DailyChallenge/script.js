// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
main = document.querySelector("#main");

function makeAllCaps (arr) {
    const p = new Promise ((resolved, rejected) => {
        newArr = []
        for (word of arr) {
            if (typeof(word) != "string") {
                rejected(`The ${word} is not a string`)
            }
        }
        for (word of arr) {
            newArr.push(word.toUpperCase())
        }
        resolved(newArr);
    });
    return p;
}

function sortWords (arr) {
    const p =  new Promise ((resolved, rejected) => {
        if (arr.length > 4) {
            resolved(arr.sort());
        } else {
            rejected(`The length of arr is ${arr.length}, but should be greater then 4`)
        }
    })
    return p;
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))



// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function toJs (str) {
 const p = new Promise ((resolve, reject) => {
    const morseJs = JSON.parse(str);
    console.log(Object.keys(morseJs));
    if (Object.keys(morseJs).length === 0) {
        reject ("Could't parse");
    } else {
        resolve(morseJs);
    }
 }
 )
 return p;
}

function toMorse(morseJS) {
const arrCoded = [];
 const p = new Promise ((resolve, reject) => {
    let userIput = prompt("Enter string");
    console.log(userIput.split("")[0]);
    for (let letter of userIput.split("")) {
        letter = letter.toLowerCase();
        if (!(letter in morseJS)) {
            reject (`Symbol ${letter} could't be coded`);
        } else {
            arrCoded.push(morseJS[letter]);
        }
    }
    resolve (arrCoded);
 })
 return p;
}

function joinWords(morseTranslation) {
     const text = morseTranslation.reduce((acc, elt) => `${acc}\n${elt}`);
     console.log(text);
     const p = document.createElement('p');
     p.appendChild(document.createTextNode(text));
     main.appendChild(p);
}

// console.log(joinWords(['sjhbcx', 'hcb', "u"]))

toJs(morse)
.then( result => {
    return toMorse(result)
}).then (result => {
    joinWords(result)
});