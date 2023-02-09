difficalty = true;
for (radio of document.getElementsByName("difficalty")) {
    radio.addEventListener("input", changeDifficalty);
}

function changeDifficalty (e) {
    str = e.target.value;
    if (str === "true") {
        difficalty = true;
    } else {
        difficalty = false;
    }
}

function initialise() {
    const allDivs = document.querySelectorAll("div");
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].classList.add("field");
        allDivs[i].setAttribute("id",i);
        allDivs[i].innerHTML = "";
        allDivs[i].addEventListener("dblclick", makeTurn);
    }

    pTurns = [];
    cTurns = [];
    spareNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
}

let winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

let playerTurn;
let playerSymb;

xBtn = document.querySelector("#newgameX");
xBtn.addEventListener("click", startForX)
yBtn = document.querySelector("#newgame0");
yBtn.addEventListener("click", startFor0)

function startForX () {
    playerSymb = "X";
    computerSymb = "0";
    playerTurn = true;
    initialise();
}

function startFor0 () {
    playerSymb = "0"
    computerSymb = "X";
    playerTurn = false;
    initialise();
    computerTurn();
}

function makeTurn (e) {
    if (!playerTurn) {
        return false;
    }
    if (e.target.innerHTML != "") {
        alert("Sorry this field is not empty")
        return false;
    }
    e.target.innerHTML = playerSymb;
    id = +e.target.getAttribute("id");
    pTurns.push(id);
    for (let i = 0;  i < spareNumbers.length; i++ ) {
        if (spareNumbers[i] === id) {
            spareNumbers.splice(i, 1);
        }
    }
    // console.log(pTurns);

    if (!checkResult()) {
        setTimeout (computerTurn, 500);
    }
   
}

function computerTurn () {
    function makeMove(num) {
        const f = document.getElementById(num);
        f.innerHTML = computerSymb;
        playerTurn = true;
        cTurns.push(num);
    }
    function boldMove (){
        const turn = Math.floor(Math.random() * spareNumbers.length);
        makeMove(spareNumbers[turn]);
        spareNumbers.splice(turn, 1);
        console.log("bold move")
    }

    function smartMove () {
        console.log("smart move")
        for (combo of winCombos) {
            if (checkCombo(combo, cTurns) == 2 && checkCombo(combo, pTurns) == 0) {
                for (num of combo) {
                    if (!cTurns.includes(num)) {
                        makeMove(num);
                        return true;
                    }
                }
            }
        }
        winCombos.sort((elt1, elt2) => compute(elt2, pTurns) - compute(elt1, pTurns));
        for (num of winCombos[0]) {
            if (spareNumbers.includes(num)) {
                const f = document.getElementById(num);
                f.innerHTML = computerSymb;
                playerTurn = true;
                cTurns.push(num);
                checkResult();
                for (let i = 0; i< spareNumbers.length; i++)  {
                    if (spareNumbers[i] === num) {
                        spareNumbers.splice(i, 1);
                    }
                }
                return true;
            }
        }
        return false;
            
    }

    function compute (elt, arr) {
        res = checkCombo(elt, arr);
        for (num of elt) {
            if (cTurns.includes(num))  { res = 0}
        }
        return res
    }
    // debugger
    if (!difficalty) {
        boldMove();
    } else {
        if (!smartMove()) {
            boldMove();
        }
    }
    checkResult();
}

function checkCombo (combo, arr) {
    s = 0;
    for (n of combo) {
        if (arr.includes(n)) {
            s++;
        }
    }
    return s;
}

function checkResult () {
if (spareNumbers.length === 0) {
    playerTurn = false;
    setTimeout(alert, 500, "Draw");
    return true
}
for (combo of winCombos) {
    if (checkCombo(combo, pTurns) === 3) {
        playerTurn = false;
        setTimeout(alert, 500, "Player wins!");
        return true
    }
}
for (combo of winCombos) {
    if (checkCombo(combo, cTurns) === 3) {
        playerTurn = false;
        setTimeout(alert, 500, "Computer wins!");
        return true
    }

}

}
