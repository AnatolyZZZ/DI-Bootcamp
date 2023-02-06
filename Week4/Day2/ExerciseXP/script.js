// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
S = (a, b) => a + b;
console.log(S(3,5));

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.
function M1 (weight) {
    return weight*1000;
}
console.log(M1(2));
M2 = function (weight) {
    return weight * 1000;
}
console.log(M2(3));
M3 = (weight) => weight * 1000;
console.log(M3(4));
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (children , partner, location, job) {
    const d = document.querySelector("#main");
    const p = document.createElement('p');
    const text = document.createTextNode(`You will be a ${job} in ${location}, and married to ${partner} with ${children} kids`);
    p.appendChild(text);
    d.appendChild(p);
}
)(8, "Ann", "England", "worker");

// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function (username) {
    const nav  = document.querySelector("#navbar");
    const text = document.createTextNode(username);
    const img = document.createElement("img");
    img.setAttribute("src", "Route-to-img");
    img.setAttribute("alt", "User-pic");
    const d = document.createElement('div');
    d.appendChild(text);
    d.appendChild(img);
    nav.appendChild(d);
}
)("John");

// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

function makeJuice (size) {
    const ingredients = [];
    const d = document.querySelector("#main");
    function addIngredients (i1, i2, i3) {
        
        const text = document.createTextNode(`The client wants a ${size} juice, containing ${i1}, ${i2} and ${i3}`);
        const p = document.createElement("p");
        p.appendChild(text);
        d.appendChild(p);
        ingredients.push(i1, i2, i3);
    }
    addIngredients("apple", "banana", "pear");
    addIngredients("pinepple", "orange", "wood");
    function displayJuice () {
        let str = `The client wants a ${size} juice, containing `;
        ingredients.forEach(ing => str+=ing + ", ");
        text = document.createTextNode(str);
        const p = document.createElement("p");
        p.appendChild(text);
        d.appendChild(p);
    }
    displayJuice();
}

makeJuice("big");

// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
