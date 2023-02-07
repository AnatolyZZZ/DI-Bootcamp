const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
     {
      name: 'Cuty',
      age: 5,
      type: 'rabbit'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Rex',
      age: 10,
      type: 'dog'
    },
  ];

  dogYears = data.reduce((acc,elt) =>acc+=elt.age*7, 0);
  console.log(dogYears);

  const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '

  const newMail = userEmail3.trim();
  console.log(newMail);

  const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.
// Example: { 'Bradley Bouley': 'Full Stack Resident' }
// Hint: Step one, create an empty object.
obj = {};
users.map(elt => {
    const key = elt.firstName + " " + elt.lastName;
    obj[key]=elt.role;
})

console.log(obj);

const letters = ['x', 'y', 'z', 'z'];

// Use a for loop to get this output { x: 1, y: 1, z: 2 };
// Use the reduce() method to get this output { x: 1, y: 1, z: 2 };

l = letters.reduce((acc, elt) => {
    acc[elt] ?  acc[elt] += 1 : acc[elt] = 1
    return acc
    },{});
console.log(l);