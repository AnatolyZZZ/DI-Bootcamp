const myDiv = document.body.firstElementChild;
myDiv.textContent = "USERS";
const myU = myDiv.nextElementSibling;


const containerSection = document.getElementById("container");
const newPar = document.createElement("p");
const content = document.createTextNode('Hello');

newPar.appendChild(content);
containerSection.appendChild(newPar);


const items = ["chocolate" , "shoes", "cat"];

function addItem () {
    for (let product of items) {
        const newParagraph = document.createElement("p");
        const content = document.createTextNode(`You bought ${product}`);
        newParagraph.appendChild(content);
        containerSection.appendChild(newParagraph);
    }
}

addItem();

// Write variables to get the value of the attributes of the specified link :

// href
// hreflang
// rel
// target
// type
const myLink = document.getElementsByTagName('p')[4].firstElementChild;
console.log(myLink.getAttribute("href"));