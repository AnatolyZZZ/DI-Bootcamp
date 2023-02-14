// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the input is a string, the promise resolves with that same string uppercased.
// If the input is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error finally call a function that console.log ("congratulation")


const main = document.querySelector("#main");

function fetchWord () {
    fetch("http://random-word-api.herokuapp.com/word?number=1")
    .then(resOne => {
        if (resOne.status != 200) {
            console.log(resOne.json());
            throw new Error("couldnt download")
        } else {
            return resOne.json()
        }
    })
    .then (resTwo => {
        console.log(resTwo[0]);
        fetchGif(resTwo[0])
    })
}


function fetchGif (cat) {
    fetch(`https://api.giphy.com/v1/gifs/random?tag=${cat}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then(resOne => {
        if (resOne.status != 200) {
            console.log(resOne.json());
            throw new Error("couldnt download")
        } else {
            return resOne.json()
        }
    })
    .then (resTwo => {
        console.log(resTwo);
        addGif(resTwo.data.images.downsized_large.url)
    })
    .catch (err => {
        const text = document.createElement("p");
        text.append(document.createTextNode("Too strange!"))
        main.appendChild(text);
    })


    function addGif(adress) {
        console.log(adress);
        const img = document.createElement("img");
        img.setAttribute("src", adress);
        main.appendChild(img);
    }
}

fetchWord();

function makePromise (input) {
    const p = new Promise (function(fulfil, reject) {;
    setTimeout ( function () {
        if (typeof(input) == "string") {fulfil(input)}
         else {reject(input)}
    }, 5000)
    })
    return p;
}
makePromise("Smth")
.then((res) => {
    ans = res.toUpperCase();
    console.log(ans);
    return  ans;
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("congratulations")
}
)
