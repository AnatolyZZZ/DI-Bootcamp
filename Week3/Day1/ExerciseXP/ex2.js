// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “John”.
// Add a border to the <li> that contains the text node “Pete”.
// Change the font size of the whole body.
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

const myDiv = document.getElementsByTagName('div')[0];
// console.log(myDiv);
myDiv.style.backgroundColor = "blue";
myDiv.setAttribute('style', "background-color: yellow;");

const myUl = document.querySelector("ul");
console.log(myUl.children[0]);

if (myDiv.style.backgroundColor === "yellow") {
    alert(`Hello ${myUl.children[0].textContent}, ${myUl.children[1].textContent} `)
}

// console.log(myUl);
for (let li of myUl.children) {
    if (li.textContent === "Pete") {
        console.log(li);
        li.style.border = "1px solid black";
    }
}
for (let li of myUl.children) {
    if (li.textContent === "John" ) {
        console.log(li);
        li.remove();
    }
}

const bd = document.body;
bd.style.fontSize = "2rem";