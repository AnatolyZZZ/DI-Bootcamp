// Using a DOM property, retrieve the h1 and console.log it.
const h1f = document.querySelector("h1");
console.log(h1f);

// Using DOM methods, remove the last paragraph in the <article> tag.
const art = document.querySelectorAll("article")[0];
lastP = art.lastElementChild;
// console.log(art);
// console.log(lastP);
lastP.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2f = document.querySelector("h2");
h2f.addEventListener("click", changeBackground);

function changeBackground (e) {
    e.target.style.background = "red";
}

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3f = document.querySelector("h3");
h3f.addEventListener("click", hideThing);

function hideThing (e) {
    e.target.style.display = "none"
}

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const button1 = document.createElement("button");
const content = document.createTextNode("I change collor");
button1.appendChild(content);
art.appendChild(button1);
button1.addEventListener("click", makeTextBold);

function makeTextBold (e) {
    const allPar = document.querySelectorAll("p");
    for (p of allPar) {
        p.style.color = "white";
    }
}

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

h1f.addEventListener ("mouseover", changeFontSize);

function changeFontSize (e) {
    console.log("fire");
    const newF = Math.floor(Math.random() * 100);
    e.target.style.fontSize = `${newF}px`;
}

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
const allPar = document.querySelectorAll("p");
const secondPar = allPar[1];
secondPar.addEventListener ("mouseover", fadeOut);


an = [
    { opacity : 1},
    { opacity : 0}
]
tm = {
    duration: 3000,
    iterations: 1,
    fill: 'forwards',
    // direction: "alternate"
  }

function fadeOut (e) {
    e.target.animate(an , tm);
    console.log("Fade");
}
