// Add a click event listener to the <input type="button">. When clicked on, it should call a function named : removecolor() that removes the selected color from the dropdown list.

const btn = document.getElementsByTagName("input")[0];
console.log(btn);
const dropd =  document.querySelector("#colorSelect")
console.log(dropd);

btn.addEventListener("click", removecolor);

function removecolor () {
    console.log ("fire");
    console.log(dropd.options[dropd.selectedIndex]);
    dropd.options[dropd.selectedIndex].remove();
}