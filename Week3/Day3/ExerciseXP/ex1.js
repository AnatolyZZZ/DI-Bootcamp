// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
setTimeout (helloWorld2, 1997);
setTimeout (helloWorld, 2000);
let counter = 5;

function helloWorld () {
    alert("Hellow world");
}

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

function helloWorld2 () {
   const myP = document.createElement("p");
   myP.appendChild(document.createTextNode("Hello world"));

   document.querySelector("#container").appendChild(myP);
   counter --;

if (counter === 0) {
    clearInterval(id);
}
}

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

id = setInterval (helloWorld2, 2000);

const btn = document.querySelector("#clear");

btn.addEventListener("click", clearInt);

function clearInt (e) {
    clearInterval(id);
}