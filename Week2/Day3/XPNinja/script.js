const person1 = {
    FullName : "Anton Abramov",
    Mass : "90",
    Height : "185",
    bmi : function() {
        m = +this.Mass;
        // console.log(m);
        h = +this.Height/100;
        return m / h / h;
    }
}

const person2 = {
    FullName : "Ant Abr",
    Mass : "99",
    Height : "180",
    bmi : function() {
        m = +this.Mass;
        // console.log(m);
        h = +this.Height/100;
        return m / h / h;
    }
}

function myFnc (obj1, obj2)  {
    if (obj1.bmi() > obj2.bmi() ) {
        return obj1;
    } else return obj2;
}

console.log(myFnc(person1,person2).FullName);

// Create a function called findAvg(gradesList) that takes an argument called gradesList.

// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed

// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.

function findAvg(gradesList) {
    let sm = 0;
    for (i of gradesList) {
        sm += i;
    }
    let res = sm/gradesList.length;
    console.log(res);
    return res;
}

function noThePass(gradesList) {
    if (findAvg(gradesList) >= 65) {
        console.log("You've passed");
    } else {
        console.log("You've failed");
    }
}

// let test = [0, 100, 22, 65, 100, 100, 100];
let test = [50, 100];

noThePass(test);