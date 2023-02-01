const redBox = document.querySelector("#box");
const yBox = document.querySelector("#target");

redBox.setAttribute("Draggable", true);

redBox.addEventListener("drop", drop);

redBox.addEventListener("dragstart", drag);

yBox.addEventListener("dragover", dragover);
yBox.addEventListener("dragleave", dragleave);
yBox.addEventListener("drop", drop);

// document.body.addEventListener("drop", drop);
// console.log(document.body);

function dragleave (e) {
    e.target.style.border = "none";
}

function dragover (e) {
    e.preventDefault();
    e.target.style.border = "1px solid black";
}

function drag (e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log ("start");
}

function drop (e) {
   e.preventDefault();
   e.dataTransfer.dropEffect = "move";
   const data = e.dataTransfer.getData("text/plain");
   const elem = document.getElementById(data);
   e.target.appendChild(elem);
   e.target.style.border = "2px solid green";
   console.log ("end");
}

