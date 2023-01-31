// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.
let shoppingList=[]

const myForm = document.createElement("form");
const inputField = document.createElement("input");
const btn = document.createElement("input");
inputField.setAttribute("type", "text");
inputField.setAttribute('id', "item");
{/* <input type="submit" value="Submit" id="submit"></input> */}
btn.setAttribute("type", "submit");
btn.setAttribute("value", "Add Item");
// btn.appendChild(document.createTextNode("Add Item"));
myForm.appendChild(inputField);
myForm.appendChild(btn);

const btnClear = document.createElement('button');
btnClear.appendChild(document.createTextNode("Clear all"));
btnClear.addEventListener("click", ClearAll);


function ClearAll() {
    shoppingList = [];
    console.log(shoppingList);
}

myForm.addEventListener("submit", AddItem);

function AddItem (e) {
    e.preventDefault();
    shoppingList.push(inputField.value);
    console.log(shoppingList);
}
myDiv = document.querySelector("#root");
myDiv.appendChild(myForm);
myDiv.appendChild(btnClear);
