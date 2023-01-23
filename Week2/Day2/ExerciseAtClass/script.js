const userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. Add the lastname Smith to the object
// 2. Change the username from John to Tom
// 2. Change the price of the pear, so it will include the Taxes. (17% is 0.17)
// 3. Ask the user for the fruit he wants between Apple, Banana and Pear. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
// 4. Console.log the price for the specific fruit the user wants

userCart["lastname"] = "Smith";

userCart['username'] = "Tom";

userCart["prices"]["pear"] *=1.17;

let ask = prompt("What fruit you want?");

ask = ask.toLowerCase();


console.log(userCart["prices"][ask])

const family = {
    lastName : "Smith",
    members : 3,
    names : ["John", "Tom", "Diana"],
    isInVacation: true,
}

// Change dynamically the isInVacation key.
// If the key is true, it should become false and vice versa
// Dont use conditionals

family["isInVacation"] =!family["isInVacation"];

console.log(family["isInVacation"]);