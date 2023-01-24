let numbers = [123, 8409, 100053, 333333333, 7]

for (let num of numbers) {
    console.log(num);
    console.log(num % 3 === 0);
}

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

let sName = prompt("What is your name?");

lName = sName.toLowerCase();

if (lName in guestList) {
    console.log(`Hi! I'm ${sName}, and I'm from ${guestList[lName]}.`)
} else {
    console.log(`Hi! I'm ${sName}, and I'm a guest.`)
}
// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the highest age in the array.
let age = [20,5,12,43,98,55];

let sm = 0;
let mx = age[0];

for (ag of age) {
    sm += ag;
    if (mx < ag) {
        mx = ag;
    }
}
console.log(`Max is ${mx}, and sum is ${sm}`);

