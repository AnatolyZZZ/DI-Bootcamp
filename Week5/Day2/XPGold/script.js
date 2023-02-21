const main = document.querySelector("#main")
function fetchOne () {
    return new Promise (function (resolve, reject) {
        const htr = new XMLHttpRequest();
        try {
            htr.open("GET", "https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
            htr.send();
        } catch (e) {
            console.log("in first catch")
            console.log(e.message);
            reject(e.message);
        }
       
        htr.onload = function () {
        const obj = JSON.parse(htr.response);
        if (obj.meta.status != 200) {
            console.log(obj.meta.status);
            reject("Could't fetch");
        } else {
            const url = obj.data.images.downsized_medium.url;
            resolve(url);
        }
        }
    })
}

function addToPage (url) {
    const image = document.createElement('img');
    image.setAttribute('src', url);
    image.setAttribute('alt', "Funny GIF");
    main.appendChild(image);
    return image;
}

function displayMessege (msg) {
    p = document.createElement("p");
    p.appendChild(document.createTextNode(msg));
    p.style.fontSize = "x-large";
    p.style.textTransform = "uppercase";
    main.appendChild(p);
    return p;
}

async function doTheJob () {
    const dl = displayMessege("downloading")
    try {
        const url = await fetchOne();
        dl.remove();
        addToPage(url);
    } catch (e) {
        dl.remove();
        displayNessege(e.message);
    }
    // 
    // const pr = fetchOne()
    // pr.then (
    //    function (url) {
    //     console.log(pr);
    //     addToPage(url);
    //     dl.remove();
    //    }
    // )
    // .catch (function (msg) {
    //     console.log(pr);
    //     console.log("in second catch")
    //     dl.remove();
    //     displayNessege(msg);
    // }   
    // )
    
}

doTheJob ();

// console.log(fetchOne());
