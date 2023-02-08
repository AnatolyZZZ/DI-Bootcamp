const famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
        age: 100
    }
]

// console.log(famousPeople);
// // Using the array above, use the map method, to create a new array that contains only the name of the people
// const namesOfPeople = famousPeople.map(elt => elt.name);
// console.log(namesOfPeople);
// // Use the map method, to create a new array, that contains objects, each object contains the name of the actor, and it's job
// const arr2 = famousPeople.map( elt => {
//     const obj = {
//         name: elt.name,
//         job: elt.job
//     }
//     return obj;
// })
// console.log(arr2);
// // BONUS: Using the array you get from question2, use the for each method, to add the names and the job of the actors on the DOM (in a paragraph, appended to a div with an id "container")
// container = document.querySelector("#container");
// arr2.forEach(
//     elt => {
//         p = document.createElement("p");
//         str = document.createTextNode(`name ${elt.name} and job is ${elt.job}`);
//         p.append(str);
//         container.append(p);
        
//     }
// )


// const studentsFootball = [
//     {name: 'Rich', score: 33}, 
//     {name: 'Peter', score: 55}
//    ];

// //    Create a new array of objects, containing the name, score and isAboveAverage if the students has a score bigger that 50, the key isAboveAverage will be true, else the key isAboveAverage will be false. Use ternary operator

// const res = studentsFootball.map(elt => {
//     const obj = {
//         name : elt.name,
//         score: elt.score,
//         isAboveAverage : elt.score > 50 ? true : false
//     }
//     return obj;
// })
 
// console.log(res);

console.log("famostpeople before",famousPeople);

arr3 = famousPeople.map(elt => {
    let obj = elt;
    delete obj.age;
    return obj;
});
console.log("arr3", arr3);
console.log("famostpeople after",famousPeople);

const numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

console.log(numbers.filter(elt => elt > 0));

const characters = [
    { name: 'James T. Kirk', series: ['Star Trek'] },
    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
 ]; 

 console.log(characters.filter(elt => elt.series.includes('Star Trek: The Next Generation')))

 let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

let count = voters.reduce((acc, elt) => acc + elt.voted, 0);
console.log(count);

const students = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55},
    {name: 'John', score: 75}
];

let score = students.reduce((acc, elt) => acc+elt.score, 0);
console.log(score);

const rainbow = ['red', 'orange', 'yellow'];

// Cloning with array destructuring and spread operator
const rainbowClone = [...rainbow];

rainbow.push("violet");
console.log(rainbow); //['red', 'orange', 'yellow', 'violet']
console.log(rainbowClone); // ['red', 'orange', 'yellow']

arr = [1, 2, 3, 4]
console.log(arr.map(elt => elt*2));
