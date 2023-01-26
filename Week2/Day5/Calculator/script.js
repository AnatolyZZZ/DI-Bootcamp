var currentNum = "";
var currentOp = "";
var calculus = "";
var enteringNum = true;

function number(num) {
    if (enteringNum == true) {
        currentNum += num;
    } else {
        calculus += currentOp;
        enteringNum = true;
        currentNum += num;
        currentOp = "";
    }
   
}
function operator (op) {
    if (enteringNum == true) {
        calculus += currentNum;
        currentNum = "";
        currentOp = op;
    } else {
        currentOp = op;
    }
    enteringNum = false;
}

function equal () {
    if (enteringNum == true) {
        calculus += currentNum;
        currentNum = "";
        alert (eval(calculus));
        calculus = ""
    } else {
        alert ("Did't finish entering");
    }
}

function resetAll () {
    currentNum = "";
    currentOp = "";
    calculus = "";
    enteringNum = true;
}

function clearAll () {
    if (enteringNum == true) {
        currentNum = "";
    } else {
        currentOp = "";
    }
}