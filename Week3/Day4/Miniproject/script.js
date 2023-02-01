colors = ["red", "gray", "black", "orange", "green", "pink", "crimson", "blue", "aqua", "brown", "azure", "coral", "DarkGoldenRod", "FireBrick", "gold", "lightblue", "lime", "white", "olive", "yellow", "purple"];

const pallet = document.querySelector("#pallet");
const draw = document.querySelector("#draw");
var paint = "white";
var drawing = false;
const theButton = document.querySelector("#thebutton");

theButton.addEventListener("click", clearAll);

function createPallet () { 
    for (color of colors) {
        const newDiv = document.createElement("div");
        newDiv.style.background = color;
        newDiv.classList.add("color");
        newDiv.addEventListener("click", pickColor);
        pallet.appendChild(newDiv);
    }
}

function createDraw () {
    for (let row = 0; row<24; row++) {
        for (let column = 0; column < 60; column++) {
            const elt = document.createElement("div");
            elt.style.background = "white";
            elt.classList.add("elt");
            elt.addEventListener("mouseover", paintTheThing);
            elt.addEventListener("mousedown", mouseDown);
            elt.addEventListener("mouseup", mouseUp);
            elt.addEventListener("click", paintOne);

            draw.appendChild(elt);
        }
    }
}

function clearAll () {
    const ch = draw.children;
    for (c of ch) {
        c.style.background = "white";
    }
    // paint = "white";
}

function paintOne (e) {
        e.target.style.background = paint;
}

function paintTheThing (e) {
    // console.log("paint");
    if (drawing === true) {
        e.target.style.background = paint;
    }
}

function mouseDown () {
    drawing = true;
    console.log(drawing);
}
function mouseUp () {
    drawing = false;
    console.log(drawing);
}

function pickColor (e){
    paint = e.target.style.background;
    console.log(paint);
}

createPallet();
createDraw();