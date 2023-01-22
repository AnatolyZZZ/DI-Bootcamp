    console.log(5 >= 1)
    // true

    console.log(0 === 1)
    // false
    console.log(4 <= 1)
    //false
    console.log(1 != 1)
    //false
    console.log("A" > "B")
    // NaN
    // false
    console.log("B" < "C")
    // NaN
    // true
    console.log("a" > "A")
    // NaN
    // true
    console.log("b" < "A")
    // NaN
    // false
    console.log(true === false)
    // false
    console.log(true != true)
    // false


    //  excersise 2
    let str = prompt("Enter string of numbers");
    let myArr = str.split(",");
    let sum  = 0;
    for (let i = 0; i < myArr.length; i++) { 
        sum += +myArr[i];
      }
    console.log(sum);


    //  excersise 3
    let sentense =prompt("Give sentence containing'Nemo'");
    let arr2 = sentense.split(' ');
    res = arr2.indexOf("Nemo");
    if (res === -1) {
        alert("Cant find Nemo");
    } else alert(`Nemo is on position ${res}`);

    // exercise 4 
    let num2 =prompt("Give me a number'");
    let answer = "B"
    if (num2 < 2) {
        answer = "Boom"
    } else {
        for (let i = 0; i < num2; i++) {
            answer = answer+"o"
        }
    answer = answer+"m"
    }
    if (num2 % 2 === 0) {
        answer = answer + "!"
    }
    if (num2 % 5 === 0) {
        answer = answer.toUpperCase()
    }

    alert(answer);
