// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// const result = ['bread', "carrot", "potato", 'chicken', "apple", "orange"];

// ------2------
const country = "USA";
console.log([...country]);

//[ U S A ]

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// [undefined, undefined, undefined] the real answer is [undefined, undefined]


const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

const welcomeStudents  = users.map(elt => `Hello ${elt.firstName}`);
console.log(welcomeStudents);


// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.

residents = users.filter(elt => elt.role === 'Full Stack Resident');
console.log(residents);


// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
lnameres = users.filter(elt => elt.role === 'Full Stack Resident').map(el => el.lastName);
console.log(lnameres);


// Use the reduce() method to combine all of these into a single string.
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

console.log(epic.reduce((acc, elt) => acc+" "+ elt));


const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

const passed = students.filter(elt => elt.isPassed);
console.log(passed);

congrats = []
passed.forEach(elt => congrats.push(`Good job ${elt.name}, you passed the course in ${elt.course}`));
console.log(congrats);