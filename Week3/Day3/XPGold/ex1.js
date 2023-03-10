// &#65 &#90
const mainSec = document.querySelector("#main");
const target = document.querySelector("#target");

function createAlphabet () {
    for (let i = 65; i<91; i++) {
        const newBox = document.createElement("div");
        newBox.classList.add("box");
        const p = document.createElement("span");
        p.appendChild(document.createTextNode(String.fromCharCode(i)));
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
    let _x = e.clientX;
    let _y = e.clientY;
    movedBox.style.left = _x + "px";
    movedBox.style.top = _y + "px";
    movedBox.style.position = "absolute";
    e.currentTarget.appendChild(movedBox);
}

target.addEventListener("dragover", dragOver);
target.addEventListener("drop", drop, true);
mainSec.addEventListener("dragover", dragOver);
mainSec.addEventListener("drop", drop, true);

createAlphabet ();