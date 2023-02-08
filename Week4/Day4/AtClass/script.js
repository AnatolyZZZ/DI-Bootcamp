function getDetails({name, house, goodstudent}) {
	console.log(name, house, goodstudent)
}

getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

function getMoreDetails({name, house, friend : {friendName, age}}) {
	console.log(name, house, friendName, age)
}

getMoreDetails(
			{name: 'Hermione Granger', 
				house: 'Gryfindor', 
				friend :  {
					friendName : 'Harry Potter', 
                    age : 20
				}
			})

const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}

function getElonMuskDetails({first : firstname, last : lastname, housesLocation : [locationOne, locationTwo], houses : {value : valueHouses}} ){
	console.log(firstname, lastname)
	console.log(locationOne, locationTwo, valueHouses)

}

getElonMuskDetails(elonPerson)

const employees = [
	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
]

for ({name : empName, email, phone} of employees) {
    console.log(empName, email, phone)
}

const studentsFootball = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55}
   ];

   [{name : name1, score : score1}, {name: name2, score : score2}] = studentsFootball;

   console.log(name1, name2, score1, score2);

//    Using MAP,  create a new array of objects, containing the name, score and isAboveAverage if the students has a score bigger that 50, the key isAboveAverage will be true, else the key isAboveAverage will be false. Use ternary operator

const mp =studentsFootball.map(obj => ({ ...obj, isAboveAverage : obj.score > 50 }))

console.log(mp);

// Part I
// Create a TV function constructor with 3 parameters : brand, channel and volume Channel should be 1 by default. Volume should be 50 by default.
// Create properties brandTV, channelTV and volumeTV equal to the 3 parameters value.
// Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
// Create an object for the LG TV
// Call the inscrease method, and check if the volume changed

class TV {
    constructor (brand, channel = 1, volume = 50) {
        this.brandTV = brand;
        this.channelTV = channel;
        this.volumeTV = volume;
    } 

    increaseVol () {
        if (this.volumeTV < 100) {this.volumeTV += 1;}
        
    }

    decreaseVol () {
        if (this.volumeTV > 0) {this.volumeTV -= 1};
    }

    setChannel (par) {
        if (par <= 50 && par >= 1) {
            this.channelTV = par;
        }
    }

    reset () {
        this.constructor (this.brandTV);
    }
}

const tv = new TV("LG",1, 10);
tv.increaseVol();
console.log(tv);

// Create a subclass for Smart TV
// It overrides the method increase, so it increase the volume by 10 and not by 1
// Add a attribute of Netflix that should be equal to true by default

class SmartTV extends TV {
    constructor (brand, channel, volume, ntfl = true){
        super (brand, channel, volume);
        this.Netflix = ntfl;
    }
    // increaseVol () {
    //     this.volumeTV += 10;
    // }
}

const tv2 = new SmartTV("PG", undefined, 100, false);
tv2.increaseVol();
tv2.reset();
console.log(tv2);


// Part III: Modify the TV class
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// It's useful to write a status, that returns info 