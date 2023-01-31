const redBox = document.querySelector("#box");

redBox.setAttribute("Draggable", true);

redBox.addEventListener("drop", drop);

redBox.addEventListener("dragstart", drag);

function drag (e) {
    e.dataTransfer.effectAllowed = "move";
    console.log ("start");
}

function drop (e) {
   e.preventDefault();
   e.dataTransfer.dropEffect = "move";
   console.log ("end");
}