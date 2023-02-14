const search = document.forms.search;
const main = document.querySelector("#main");
const delall = document.querySelector("#delete");

search.addEventListener("submit", addGif);

let numberOfGifs = 0;
// objArr = [];
// create delete all buton and make it invisible
const del = document.createElement("button");
del.appendChild(document.createTextNode("Delete all"));
del.addEventListener("click", deleteAll);
delall.appendChild(del);
del.style.display = "none";
// deletes all in main section
function deleteAll () {
    main.innerHTML = ""
    del.style.display = "none";
}
// class of gif and button delete related to it
class GifWithButton {
    constructor (adress) {
        this.gif = this.createImg(adress);
        this.btn = this.createBtn();
        numberOfGifs++;
    }
    // img didn work so used embed
    createImg (adress) {
        const img = document.createElement("embed");
            img.setAttribute("src", adress);
            main.appendChild(img);
        return img;
    }
    
    createBtn  () {
        const btn = document.createElement("button");
        btn.appendChild(document.createTextNode("Delete"));
        btn.addEventListener("click", this.deleteThis);
        main.appendChild(btn);
        return btn;
    }
    // first deletes targets sibling than target itself and decrease number of gifs on the page
    deleteThis (e) {
        console.log(e.target.previousElementSibling)
        e.target.previousElementSibling.remove();
        e.target.remove();
        numberOfGifs--;
        if ( numberOfGifs === 0) {
            del.style.display = "none"
        }
    } 
}
// when adding gif on the page check if  button delete all should be visible
function addToPage (adress) {
    const gif = new GifWithButton(adress);
    if ( numberOfGifs > 0) {
        del.style.display = "block"
    }

}

function addGif (e) {
    e.preventDefault();
    const query = e.target.query.value;
    const htr = new XMLHttpRequest;
    htr.open("GET", `https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${query}`);
    htr.send();
    htr.onload = function () {
        const arr = JSON.parse(htr.response).data;
        if (arr.length === 0) {
            alert("Sorry, didnt find enything")
        } else {
            r = Math.floor(Math.random() * 50)
            console.log(arr[r]);
            addToPage(arr[r].embed_url);
            
        }
    }

}