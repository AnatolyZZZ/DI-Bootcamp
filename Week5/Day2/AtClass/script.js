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

