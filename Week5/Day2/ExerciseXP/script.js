// Create a program to retrieve the data from the API URL provided above. Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.

const htr = new XMLHttpRequest;

htr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
htr.send("q=hilarious&rating=1");

htr.onload = function () {
    const obj = JSON.parse(htr.response);
    console.log(obj);
}


// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
const ntr = new XMLHttpRequest;

ntr.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
ntr.send();
ntr.onload = function () {
    const obj = JSON.parse(ntr.response);
    console.log(obj);
}
