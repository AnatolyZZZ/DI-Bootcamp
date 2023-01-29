// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
const mainDiv = document.getElementById("navBar");
mainDiv.setAttribute("id", "socialNetworkNavigation");
// console.log(mainDiv);

const newElt = document.createElement("li");
const textNode = document.createTextNode("Logout");
newElt.append(textNode);
// console.log(newElt);
const myUl = document.getElementsByTagName('ul')[0];
// console.log(myUl);
myUl.appendChild(newElt);

console.log(myUl.firstElementChild.textContent);
console.log(myUl.lastElementChild.textContent);


