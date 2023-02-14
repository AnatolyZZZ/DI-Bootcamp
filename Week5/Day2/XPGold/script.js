const htr = new XMLHttpRequest;
const main = document.querySelector("#main")
htr.open("GET", "https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
htr.send();

htr.onload = function () {
    obj = JSON.parse(htr.response);
    const url = obj.data.url + "?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    console.log(url);
    const img = document.createElement("embed");
    img.setAttribute("src", url);
    main.appendChild(img);
}