// &#65 &#90
const mainSec = document.querySelector("#main");
const target = document.querySelector("#target");

function createAlphabet () {
    for (let i = 65; i<91; i++) {
        const newBox = document.createElement("div");
        newBox.classList.add("box");
        const p = document.createElement("span");
        p.appendChild(document.createTextNode(` &#${i};`))
        newBox.appendChild(p);
        mainSec.appendChild(newBox);
        newBox.addEventListener('dragstart', dragStart);
        newBox.setAttribute("draggable", true);
        newBox.setAttribute("id",`&#${i};`)
    }
    target.style.display = "block"
    target.style.height = "500px"
}

function dragStart (e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log(e);
    console.log(e.target.id);
}

function dragOver (e) {
    e.preventDefault();
    // console.log(e.target);
}

function drop (e) {
    e.preventDefault();
    e.stopPropagation();
    const data = e.dataTransfer.getData("text/plain");
    const movedBox = document.getElementById(data);
    console.log(movedBox);
    e.currentTarget.appendChild(movedBox);
}

main.addEventListener("dragover", dragOver);
main.addEventListener("drop", drop, true);

createAlphabet ();