let adressNumber = 10;
let adressStreet = 'New street';
let country = "Israel";

const globalAdress =`the adress is ${adressNumber} of ${adressStreet} in ${country}`;

console.log(globalAdress);

let yearOfBirth = 1988;
let nextYear = 2024;
let age = nextYear - yearOfBirth;
console.log(`I will be ${age} in ${nextYear}`)


let myArray = ['cat','dog','fish','rabbit','cow'];
console.log(myArray[1]);
myArray.splice(3,1,"horse");
console.log(myArray.length);
console.log(myArray);
