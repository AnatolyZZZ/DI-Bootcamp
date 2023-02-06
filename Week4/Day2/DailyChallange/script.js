// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method. 

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?

// Invoke the cloneGroceries function.
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (obj) => {
    obj.fruits.forEach((elt) => console.log(elt))
}

displayGroceries(groceries);

const cloneGroceries = () => {
    let user = client;
    client = "Betty"; // at this monent we create new string Betty and client refers to it, user still refers to Jhone
    console.log(user);
    let shopping = groceries;
    groceries.totalPrice = "35$";
    console.log(shopping.totalPrice); // both variables refers to same object
    groceries.other.payed = false;
    console.log(shopping.other.payed); // both variables refers to same object
}
cloneGroceries();


