// exercise 1
let sentence = ["my","favorite","color","is","blue"];

console.log(sentence[0]+sentence[1]+sentence[2]+sentence[3]+sentence[4]);

// exercise 2
let str1 = "mix";
let str2 = "pod";
let tmp = str1.slice(0,2);
str1=str2.slice(0,2)+str1.slice(2,3);
str2=tmp+str2.slice(2,3);

tmp = str1 + " " + str2; 
console.log(tmp)

// exercise 3
let num1 = prompt("What is your number?");
num1 = +num1;
let num2 = prompt("What is your  second number?");
num2 = +num2; 
let op = prompt("What is your  operation? ( + - *  /)");
alert(eval(num1+op+num2)); 

// console.log(num1);
// console.log(typeof(num1));