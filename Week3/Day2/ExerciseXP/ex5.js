const theBtn = document.querySelector("#myButton");

theBtn.addEventListener("mouseover", onHover);
theBtn.addEventListener("click", onClick);
theBtn.addEventListener("mouseout", offHover);
theBtn.addEventListener("dblclick", dbClick);

function onHover (e) {
    e.target.style.border = "5px solid red"
}

function offHover (e) {
    console.log("Fire");
    e.target.style.border = "1px dotted black"
}
function onClick (e) {
    e.target.style.borderRadius = "25px"
    e.target.textContent = "Now twice";
}

function dbClick (e) {
    e.target.style.borderRadius = "0px"
    e.target.textContent = "Click me";
}


