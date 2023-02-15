const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

const allPromise = Promise.all([promise1, promise2, promise3])
async function ass() {
    const res = await allPromise;
    console.log(res)
} 
ass()

// Promise.all is async function that takes array of params and resolves when all params are resolved
// in our case promise 1 and 2 are resolved from a beginning, and promise3 in 3 secs
// we wait 3 secs for promise 3 to be resolved and so Promise.all is resolved too, so we can use its result wich is array of 3 results.

//------------------- part2-------------------

// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()

const theForm = document.querySelector("#cities");
const d = document.querySelector("#display");
theForm.addEventListener("submit", displayAll);

async function sunrise (lat, long) {
    const res = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`);
    const resp = await res.json();
    console.log(resp.results.sunrise);
    return resp.results.sunrise
}

function displayOnPage(arr) {
    const p = document.createElement("p");
    const text = document.createTextNode(`first city: ${arr[0]}, and second: ${arr[1]}`);
    p.appendChild(text);
    d.appendChild(p);
}

async function displayAll (e) {
    e.preventDefault();
    const lat1 = e.target.lat1.value;
    const long1 = e.target.long1.value;
    const lat2 = e.target.lat2.value;
    const long2 = e.target.long2.value;
    promises = Promise.all([sunrise(lat1, long1), sunrise(lat2, long2)])
    const sunrises = await promises;
    displayOnPage (sunrises);
}