// # Review on Javascript

// #### Basics

// 1. How to access the second element of the array `const nums = [3, 7, 10]`

// nums[1];

// 2. For the code below, what does `arrNums.splice(2, 0)` return?

//     ```javascript
//     const arrNums = [1, 2, 3, 4, 5];
//     ```

// [3, 4, 5]

// 3. What is the result of the following code :

//     ```javascript
//     const bestNumbers = [1, 2, 3]
//     const secondBestNumbers = [7, 8, 9]
    
//     const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
//     console.log(favoriteNumbers)
//     ```

// [4, 5, 6, 1, 2, 3, 7, 8, 9]

// 4. What does the following code print to the console?

//    ```javascript
//    const football = {
//      type: "sport",
//      clubs: {
//        france : "Paris Saint-Germain",
//        spain : "Atlético Madrid",
//      }
//    }  
   
//    football.clubs.spain = "Real Madrid";
//    console.log(football.clubs.spain);
//    ```

// "Real Madrid"
   
// 5. What does the following code print to the console?

//    ```javascript
//    const myteam = "bestTeam";
   
//    const football = {
//      type: "sport",
//      clubs: {
//        france : "Paris Saint-Germain",
//        spain : "Atlético Madrid",
//      }
//    }  
   
//    football.clubs[myteam] = "France national football team";
//    console.log(football.clubs);
//    ```

//  {
//            france : "Paris Saint-Germain",
//            spain : "Atlético Madrid",
//            bestTeam : "France national football team"
// }
   
// 6. Can we define the function as follows? 
//     If yes, 
//     * what is it called ?
//     * what is this part ?
//         ```
//         function(a, b){
//            return a*b;
//         }
//         ```
//     * explain how to invoke it

//     ```javascript
//     const x = function(a, b){
//        return a*b;
//     }
//     ```

// Yes its annonimous function assigned to var x, body of annonimous function,  x(1,2) 

// 7. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain

//     ```javascript
//     function x() {
//     	a = 5;
//     }
//     ```

// Yes, but we should,t do it anyway

// #### Functions

// 8. In JavaScript can we pass functions as arguments to other functions? What does this code return ?

//     ```javascript
//     function sayHello() {
//        return "Hello, ";
//     }
//     function greeting(helloMessage, name) {
//       console.log(helloMessage() + name);
//     }
//     greeting(sayHello, "JavaScript!");
//     ```
    
// Yes, it will print in console "Hello, JavaScript!"

// 9. Transform this function into an arrow function. Explain what is the goal of this parameter `num1=10`.

//       ```javascript
//       function sum(num1=10, num2){
//           return num1 + num2
//       }
      
//       sum(40,2)
//       sum(42,0)
//       console.log("the answer to everything is", sum(42,0))
//       ```

// const sum = (num1=10, num2) => num1+num2;
// The first parametr is default 10, we can call function like this sum(32) and get 42

// 10. How would you call the `foo` function in the console.log, in order to display what the `bar` function returns ? Explain the process and concept behind it

//      ```javascript
//      function foo () {
//        function bar() {
//          return "Poppin' bottles";
//        }
//        return bar;
//      }
//      ```
     
    //  console.log(foo()());
    //  foo() returns bar function then we call it with second ()


// #### DOM

// 11. Which of the following events will you add in the `addEventListener()`method? 
//       ☐ click
//       ☐ onclick

// 'click'

// 12. Does the `addEventListener()` method allow you to add many events to the same element?

//     ```javascript
//     x.addEventListener("mouseover", func1);
//     x.addEventListener("click", func2);
//     x.addEventListener("mouseout", func3);`
//     ```

// Yes

// 13. DOM exercise

//       1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM.
//                 * If the number of paragraph added is a multiple of 3, the content of the paragraph is "Hello"
//                 * else the content of the paragraph is "New Paragraph" --> MANDATORY  : use ternary operator
//                     * Example: if the paragraph is the 3rd one added, the content should be "Hello"
//         --> MANDATORY : Use arrow functions.

const btn = document.querySelector("#myButton");
const main = document.querySelector("#main");
let parNum = 1;
const addPar = () => {
    const p = document.createElement('p');
    let text;
    text = (parNum % 3 === 0) ? 'Hello' : "New Paragraph";
    p.appendChild(document.createTextNode(text));
    p.addEventListener('mouseover', changeToRed);
    p.addEventListener('mouseleave', changeToBlack);
    main.appendChild(p);
    parNum++;
}

btn.addEventListener('click', addPar);

function changeToRed (e) {
    e.currentTarget.style.color = "red";
}

function changeToBlack (e) {
    e.currentTarget.style.color = "black";
}

//       2. Part II : Add to each new paragraph, an event listener of mouse over. When you hover on a paragraph, the paragraph should become red (ie. color of the                        text).

// #### Array Methods : forEach, map, filter, reduce, find, every, some

// 14. Do this exercise twice: first with a `for loop`, then with a `for of loop`.
// Console.log the sum of this array

//     ```javascript
       const marks = [67, 60, 89, 90, 67, 42];
//     ```

console.log(marks.reduce((acc, cur) => acc+cur));
let s = 0;
for (elt of marks) {
    s += elt;
}
console.log(s);
// 15. What is the value of `passed` in the following code?

//      ```javascript
//          const marks = [67, 60, 89, 90, 67, 42];

         const passed = marks.every(function(m) {
            return m >= 50;
         });
console.log(passed);
//      ```

// false because 42 returns false

// 16. What does the following code log?

//     ```javascript
//        const nums = [10, 50, 88];

//        const bignums = nums.filter(function(n) {
//           return n > 10;
//        });

//        console.log(bignums);
//     ```

// [50, 88]

// 17. Use a **javascript array method** to square the value of every element in the array. 

//     ```javascript
       let input = [ 1, 2, 3, 4, 5 ];
       input = input.map(elt => elt**2);
    
       console.log(input) // [ 1, 4, 9, 16, 25]
//     ```

// 18. Use **2 javascript array methods** and chain them to return the sum of all the positives ones. 

//      ```javascript
         const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
         const total = secondInput.filter(elt => elt>0).reduce((acc, elt) => acc+elt)
         console.log(total) //42
//      ```


// 19. Use **3 javascript methods** and chain them to abbreviate the name and return the name initials.

//      ```javascript
         const input2 = 'George Raymond Richard Martin';
         initials = input2.split(" ").reduce((acc, elt) => acc+elt[0], "");
         console.log(initials)//'GRRM'
//      ```

// #### Object and Classes

// 20. How objects are passed to a function in JavaScript? By Value or By Reference ? Explain in detail, using the below example:

// //     ```javascript
//     function changeTshirt (myshirt){
//         console.log("myshirt", myshirt);
//         myshirt.color = "red"  
//         console.log("myshirt", myshirt); //this is the parameter
//         console.log("tshirt", tshirt);   //this is the global variable
//     }


//     const tshirt = {
//         color : "blue",
//         price : 10
//     }

//     changeTshirt(tshirt)
// //     ```

// Object is passed by refferense so when we change myshirt.color to red we change global variable 

// 21. How would you change the code above, so that when you modify the key `color` from the parameter `myshirt`, it won't change the global variable `tshirt` ?

  // make a shallow clone of object in parametr: function changeTshirt ({...myshirt}) 


// 22. Use object destructuring to retrieve the value of the keys `france` and `spain`

// //     ```javascript
//      const football = {
//          type: "sport",
//          clubs: {
//            france : "Paris Saint-Germain",
//            spain : "Atlético Madrid",
//          }
//        }  
// //     ```

// const {clubs: {france, spain}} = football;
// console.log(france);

// 23. Use object destructuring in the function to retrieve the value of the keys `france` and `spain`

//     ```javascript
     function retrieveSports ({clubs:{france: franceTeam, spain:spainTeam}}) {
        const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
        console.log(sentence);
     }

     const football = {
         type: "sport",
         clubs: {
           france : "Paris Saint-Germain",
           spain : "Atlético Madrid",
         }
       }  

     retrieveSports(football)
//     ```

// 24. What will be printed in the console

//     ```javascript
    // class Item {
    //    constructor(nameProduct, priceProduct) { 
    //          this.name = nameProduct;
    //          this.price = priceProduct;
    //    }

    //    displayInfo () {
    //         console.log(this.name + " is for $ " + this.price)
    //    }
    // } 

    // const cake = new Item("Chocolate Cake", 10);
    // cake.displayInfo();
//     ```

// "Chocolate Cake is for $ 10"

// #### Promises

// 25. What will be the output and why ? What will be the state of the promise ?

//     ```javascript
    // Promise.resolve('Success!')
    //   .then(data => {
    //     return data.toUpperCase()
    //   })
    //   .then(data => {
    //     console.log(data)
    //   })
//     ```
// SUCCESS! Resolved promise because we make .resolve and then chain 2 .then  thirst to retrive resolved value and uppercase then pass it to second and console log it  

// 26. What will be displayed by the following code, after 2 seconds?

//     ```javascript
    // const p = new Promise(function(resolve, reject) {
    //    setTimeout(function() {
    //       resolve("OK");
    //    }, 2000);
    // });
    
    // p.then(function(data) {
    //    console.log(data);
    // });
//     ```

// in 2 seconds promise p is resolved with value "OK" p.then gets "OK" and console log it

// 27. Consider the following `async` function and its output. What will be displayed to the console when calling the `test()` function? Explain the process

//     ```javascript
    // async function test() {
    //   let result = 'first!';
      
    //   const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('done!'), 1000);
    //   });
    
    //   result = await promise;
    
    //   console.log(result);
    // }
    
    // test();
//     ```

//  Fist result is 'first', then with awaiy we make function test to wait for promise to be resolved
// When in one second promise is resolved with "done!" we set result to "done!" and console log it. So "done!"" in console.

// 28. Use **async await**, and **the fetch API** to fetch a fact on cats and display it. Use this third party API :  `https://catfact.ninja/fact`
//     1. In the HTML file, create a button, everytime you click it you will add a random cat fact on the DOM 
//     2. In the JS file, create 2 functions : one to fetch data from API, the other one to display it on the page using the DOM
//     3. Make sure to use try and catch

async function getFact () {
    const resp  = await fetch("https://catfact.ninja/fact");
    if (resp.status != 200) {
        throw new Error ("Fetch failed");
    } else {
        const obj = await resp.json()
        return obj.fact
    }
}

function addToPage (text) {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(text));
    main.appendChild(p);
}

const fact = document.querySelector("#catFact");
fact.addEventListener('click', addFact);

async function addFact () {
    try {
      const txt = await getFact();
      addToPage(txt);
    } catch (e) {
        console.log(e.messege)
    }

}

// 29. Use **async await**, and **the fetch API** to POST some data.
//     * Retrieve the data from a form (you can use new FormData), and send this data to this API : `https://jsonplaceholder.typicode.com/posts`. 
//     * The server will send you back some dummy data that you will display on the DOM.
//     * Use the documentation of the API : https://jsonplaceholder.typicode.com/guide/
//     * Use the fetch API documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
//     * Use the new FormData documentation with Object.fromEntries() : https://gomakethings.com/the-object.fromentries-method-in-vanilla-js/

async function addPostToServer (obj) {

    const para = {
        method : "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify(obj)
    }

    const resp  = await fetch("https://jsonplaceholder.typicode.com/posts", para);

    if (resp.status != 201) {
        throw new Error ("Faild to create post");
    } else {
        const obj = await resp.json()
        return obj
    }
}

async function makePost (e) {
    e.preventDefault();
    const val = {
        title : e.target.title.value,
        body : e.target.text.value,
        userId : 1
    }
    try {
        const response = await addPostToServer(val);
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(JSON.stringify(response)));
        main.appendChild(p);
    } catch (e) {
        console.log(e.messege)
    }
}


const theForm = document.querySelector("#post");
theForm.addEventListener("submit", makePost);


// #### BONUS : Classes

// Welcome to the space station! It is your first day onboard and as the newest and most junior member of the crew, you have been asked to organize the library of manuals and fun novels for the crew to read.

// Headquarters have asked that you store the following information about each book.

// * The title
// * The author
// * Creation date
// * The number of pages
// * The number of times the book has been read.
// * If the book was thrown away (boolean)

// Headquarters also needs you to track certain actions that you must perform when books get out of date. 
// * First, *a book* can be read, everytime this method is called, the number of times the book was read is inscreased by 1
// * First, *for a manual*, the book must be thrown out if it is over 5 years old. 
// * Second, *for a novel*, the book should be thrown out if it has been checked out over 100 times.

// 1. Construct three classes that hold the information needed by headquarters as properties. 
// * One class should be a Book class 
// * and two child classes of the Book class called Manual and Novel. 
// * Each class will contain two methods. 
//     * One will be a constructor. 
//     * The other one will either be in charge of disposal of the book or updating the property related to the number of times a book has been checked out. 

// Hint: This means you need to read through the requirements for the problem and decide what should belong to Book and what should belong to the Novel and Manual classes.

// 2. Declare an object of the `Novel` class for the following tome from the library:

// | VARIABLE                                      | VALUE                              |
// | --------------------------------------------- | ---------------------------------- |
// | Title                                         | Top Secret Shuttle Building Manual |
// | Author                                        | Redacted                           |
// | Creation date                                 | 2013                               |
// | Number of pages                               | 1147                               |
// | Number of times the book was read             | 1                                  |
// | If the book was thrown away                   | No                                 |

// <br>

// 3. Declare an object of the Manual class for the following tome from the library:

// <br>

// | VARIABLE                                      | VALUE               |
// | --------------------------------------------- | ------------------- |
// | Title                                         | Pride and Prejudice |
// | Author                                        | Jane Austen         |
// | Creation date                                 | 1813                |
// | Number of pages                               | 432                 |
// | Number of times the book was read             | 32                  |
// | If the book was thrown away                   | No                  |

// <br>

// 4. One of the above books needs to be discarded. Call the appropriate method for that book to update the property. That way the crew can throw it into empty space to become debris.

// 5. The other book has been checked out 5 times since you first created the object. Call the appropriate method to update the number of times the book has been checked out.