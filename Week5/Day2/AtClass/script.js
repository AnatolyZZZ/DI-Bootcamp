function checkEmail (email) {
    try {
        if (!email.includes("@")) {
            throw new Error("not a email");
        }
    } catch (err) {
        console.log(err.message)
    } finally {
        console.log("function finished");
    }
}

// const someVar = 'Cannot be reassigned';
// try {
//   someVar = 'Still going to try';
// } catch(e) {
//   console.log(e);
// }

// console.log("after")

// checkEmail("johnsmith.com") // throw an exception that is caught
// checkEmail("john@smith.com")  // will still run because the exception was caught

const htr = new XMLHttpRequest;
htr.open("GET", "http://universities.hipolabs.com/search?country=Israel");
htr.send();

const main = document.querySelector("#main");

htr.onload = function () {
    const data = JSON.parse(htr.response);

    for(elt of data) {
        const {name, web_pages} = elt;
        const str = name + " " + web_pages;
        p = document.createElement("p")
        p.appendChild(document.createTextNode(str));
        main.appendChild(p);
    }

}

const errorhandler = (e) => {
    console.log("Smth happend");
}

htr.addEventListener("progress", progress);
htr.addEventListener('error', errorhandler);

function progress (event) {
    let percentComplete = parseInt((event.loaded / event.total) * 100);
    console.log("Upload: " + percentComplete + "% complete")
}

let categories = [];
let randCat;

htr.open("GET", "https://api.chucknorris.io/jokes/categories");
htr.responseType="json";
htr.send();
htr.onload = function () {
    console.log(htr.response);
    categories = [...htr.response];
    console.log(categories);
    request2();
}

console.log(categories);
setTimeout(console.log, 2000, categories);
function request2 () {
    htr2 = new XMLHttpRequest;
    randCat = categories[Math.floor(Math.random() * categories.length)];
    let str = `https://api.chucknorris.io/jokes/random?category=${randCat}`
    console.log(str);
    htr2.open("GET", str);
    htr2.responseType="json";
    htr2.send();
    htr2.onload = function () {
    p = document.createElement("p");
    p.appendChild(document.createTextNode(htr2.response.value));
    console.log(htr2.response.value);
    main.appendChild(p);
}
}



