const buttons = document.querySelectorAll(".button");

function toggleGlow (obj) {
    obj.classList.toggle("glow");
}

function  playSound (letter) {
    const sA = new Audio("sounds/boom.wav");
    const sS = new Audio('sounds/clap.wav');
    const sD = new Audio('sounds/hihat.wav');
    const sF = new Audio('sounds/kick.wav');
    const sG = new Audio('sounds/openhat.wav');
    const sH = new Audio('sounds/ride.wav');
    const sJ = new Audio('sounds/snare.wav');
    const sK = new Audio('sounds/tink.wav');
    const sL = new Audio('sounds/tom.wav');

    switch (letter) {
        case "A":
            sA.play();
            break;
        case "S":
            sS.play();
            break;
        case "D":
            sD.play();
            break;
        case "F":
            sF.play();
            break;
        case "G":
            sG.play();
            break;
        case "H":
            sH.play();
            break;
        case "J":
            sJ.play();
            break;
        case "K":
            sK.play();
            break;
        case "L":
            sL.play();
            break;
    }
}

function boxPress (e) {
    letter = e.target.attributes.id.value;
    // console.log(e.target.attributes.id.value);
    // function toggleGlow () {
    //     e.target.classList.toggle("glow");
    // }
    toggleGlow(e.target);
    setTimeout(toggleGlow, 500, e.target);
    playSound(letter);
}


for (b of buttons) {
    // console.log(b.attributes.id.value);
    b.addEventListener("click", boxPress);
}

document.addEventListener('keydown', keyPress)

function keyPress (e) {
    let keyPressed = e.key.toUpperCase();
    const btns = document.querySelectorAll(".button");
    for(btn of btns) {
        if (btn.textContent === keyPressed) {
            toggleGlow(btn);
            setTimeout(toggleGlow, 500, btn); 
        }
    }
    // .find((elt) => (elt.textContent === keyPressed))
    // .find(elt => );
    // console.log(btn);
    // .classList.toggle("glow");
    // console.log(keyPressed);
    playSound(keyPressed);
}