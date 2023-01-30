// Declare a global variable named allBoldItems.
var allBoldItems;
const par = document.querySelector('p');

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBold_items() {
    
    const arrOfBold = [];
    for (ch of par.children) {
        // console.log(ch.tagName);
        if (ch.tagName == "STRONG" ) {
            arrOfBold.push(ch);
        }
    }
    // console.log(arrOfBold);
    allBoldItems = arrOfBold;
}
getBold_items();

function highlight() {
    for (s of allBoldItems) {
        s.style.color = "blue";
    }
}

function return_normal() {
    for (s of allBoldItems) {
        s.style.color = "black";
    }
}
par.addEventListener("mouseover", highlight);
par.addEventListener("mouseout", return_normal);

// Create a function called highlight() that changes the color of all the bold text to blue. 

// Create a function called return_normal() that changes the color of all the bold text back to black. 

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
