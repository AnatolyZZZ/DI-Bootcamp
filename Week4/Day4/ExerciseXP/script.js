const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

function displayStudentInfo(objUser){
    const {first, last} = objUser;
    const str = `Your full name is ${first} ${last}`
    console.log(str);
    return str;
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

const users = { user1: 18273, user2: 92833, user3: 90315 };
// Using methods taught in class, turn the users object into an array: 
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
arr = []
for (n in users) {
    arr.push([n , users[n] * 2])
}

arr2 = Object.entries(users);
for (entry of arr2) {
    entry[1] *= 2;
}

console.log(arr2);

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
// object

class Dog {
    constructor(name) {
      this.name = name;
    }
  };
//2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

  pappy = new Labrador ("Name", "big");
  console.log(pappy);

  /// EX6
  console.log([2] === [2], {} === {})

  // false false because left and right parts each create different object -> refferences are different


//   What is, for each object below, the value of the property number and why?
const object1 = { number: 5 }; // 5
const object2 = object1; // 5
const object3 = object2;  // 5
const object4 = { number: 5}; // 5

object1.number = 4; // and also for objects 2, 3 cause they are the same obj
console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes. 

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

class Animal {
    constructor (n, t, c) {
        this.type = t;
        this.name = n;
        this.color = c;
    }
}
class Mamal extends Animal {
    constructor(n, t, c, s = "") {
        super(n, t, c);
        this.soundMade = s;
    }
    sound (s="") {
        if (s !="") {this.soundMade = s;};
        // console.log(this.name, this.type, this.color, this.soundMade);
        return {name : this.name, type: this.type, color: this.color, says: this.soundMade};
    }
}

farmerCow = new Mamal("Masha", "cow", "brown", "mooooo");
console.log(farmerCow.sound());