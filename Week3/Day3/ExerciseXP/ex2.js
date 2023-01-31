const redBox = document.querySelector("#animate");

// redBox.addEventListener("click", myMove);

var x = 0;

function increase () {
    redBox.style.left = `${x}px`
    if (x < 350) {
        x++;
    } else {
        console.log ("Time!");
        clearInterval (id);
    }
}

function myMove (e) {
    id = setInterval (increase, 1);
    console.log(x);
    
}