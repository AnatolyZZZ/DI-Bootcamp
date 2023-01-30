// Exercise 1 - basic addEventListener
// Create two buttons - id of "red", id of "blue"
// When we click on the red button -> Change the backgroundcolor of the page to red
// When we click on the blue button -> Change the backgroundcolor of the page to blue

// Exercise 2 - using the event object

const colors = ["blue", "yellow", "green", "pink"];

// Add inside the HTML file a div of id "container" (do it directly in the HTML)
// Using a loop, add one button per color inside the div container (do it directly in the JS)
// Each button should have an "click" event listener that changes the background color of the document, to the color of the button (do it directly in the JS)

const sect = document.querySelector("#container");
// console.log(sect);

for (color of colors) {
     curBtn = document.createElement("button");
     curBtn.setAttribute("id" , color );
     const text = document.createTextNode(color);
     curBtn.appendChild(text);
     curBtn.addEventListener("click", myFunc);
     sect.appendChild(curBtn)
}

function myFunc (e) {
    console.log(e.target);
    document.body.style.background = e.target.textContent;
}

let form = document.forms.my; 
let firstElement = form.elements.one; 

console.log(document.forms); // 1
firstElement.value = 'hey' 
console.log(firstElement.value); // "hey"