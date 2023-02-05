// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
// inside function a is 3 outside is undefined because has function scope
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// error because we cannot overrite const

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // a = 0
funcTwo() // a = 5
funcThree() // a = 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ? 
// mistake in functionTwo


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() // a is hello and it is global
funcFive() // hello

//#4
let a = 1;
function funcSix() {
    let a = "test"; // local variable a = test
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix() // 
// #4.2 What will happen if the variable is declared 
// with const instead of let ? local constat a = test

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); // 5
}
alert(`outside of the if block ${a}`); // a = 2

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ? ok because it is local