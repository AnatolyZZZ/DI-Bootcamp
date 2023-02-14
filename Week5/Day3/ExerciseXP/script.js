// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.

function compareToTen(num) {
    p = new Promise (function (resolve, reject) {
        if (num <10 ) {
            resolve (num);
        } else {
            reject (num);
        }
    })
    return p
}

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log("resolved", result))
  .catch(error => console.log("rejected", error))

//In the example, the promise should resolve
compareToTen(8)
    .then(result => console.log("resolved", result))
    .catch(error => console.log("rejected", error))

// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

const p2 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 4000, "success")
})
p2
.then (result => console.log(result))
.catch (err => console.log("Ooops something went wrong:", err))

// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const p3 = Promise.resolve(3);
const p4 = Promise.reject("Boo")
p3.then (
    res => console.log("Autoresolved", res)
)
p4.catch (
    err => console.log("Autoerror: ", err)
)