// function setObj(person) {
//     person.age = 25; 
//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ?
// console.log(personObj2); // -> ?

function setObj(person) {
	person = {
        name: 'John',
        age: 50
    };
    
    return person;
}

let personObj1 = {
    name: 'Alex',
    age: 30
};

let personObj2 = setObj(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?

(function (name) {
    const d = document.querySelector("#container");
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(name));
    d.appendChild(p);
})("John");

// Create a function named starWars that takes no parameter.
// The function should declare a variable characters equal to an empty array
// In the startWars function, create a function named createCharacter. It receives two parameters, the first name and last name of a character. If the character doesn't have a last name, the default should be "Smith" and push it to the characters array.
// In the startWars function, create a function named displayCharacter should display in the body the fullname of the characters,
// Call the createCharacter function a few times inside the starWars function and call the displayCharacter function once

function starWars () {
    const caracters = [];
    function createCharacter(firstN, lastN = "") {
        lastN ? "" : lastN = "Smith";
        const newCaracter = {
            firstName : firstN,
            lastName : lastN
        }
        caracters.push(newCaracter);
    }

    function displayCharacter () {
        for (ch of caracters) {
            console.log(ch);
        }
    }

    createCharacter("Ann", "Boo");
    createCharacter("no");
    createCharacter("Eth", "Surname");
    displayCharacter();

}
starWars();