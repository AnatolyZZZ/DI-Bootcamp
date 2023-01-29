// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// Delete the <li> that contains the text node “Sarah”.

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.
const container = document.getElementById('container');
console.log(container);

const exPete = document.getElementsByClassName("list")[0].children[1];
exPete.textContent = "Richard";
console.log(exPete);

allUls = document.getElementsByClassName("list");
for (ul of allUls) {
    console.log(ul);
    ul.firstElementChild.textContent = "Anatoly";
    ul.classList.add("student_list");
    const names = ul.children;
    for (person of names) {
        if (person.textContent === "Sarah") {
            person.remove();
        }
    }
}
document.getElementsByClassName("list")[0].classList.add("university", "attendance");


