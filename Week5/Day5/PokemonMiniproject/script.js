arrObj = [];
let current;
const infoDiv = document.querySelector("#info");
const foto = document.querySelector("#foto");
const spawn = document.querySelector("#green");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
errorDisplayed = false;
const errorP = document.createElement('p');
errorP.appendChild(document.createTextNode("Sorry, could't catch new Pokemon :-("))
infoDiv.appendChild(errorP);
errorP.classList.add("invisible");
const searchImg = document.createElement('img');
searchImg.setAttribute("src", "loading.gif");
searchImg.classList.add("poke-image");
foto.appendChild(searchImg);
searchImg.classList.add("invisible");

left.addEventListener("click", moveLeft);
right.addEventListener("click", moveRight);
spawn.addEventListener("click", getPokemon);

async function fetchOne(url) {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

function displayPokemon (info) {
    let pokemon = [];
    const image = document.createElement("img");
    image.setAttribute("src", info[5]);
    image.classList.add("poke-image");
    const nm = document.createElement('p');
    nm.appendChild(document.createTextNode(info[0]));
    nm.classList.add("name");
    const text = `Pokemon #${info[3]}\nHeight: ${info[1]}\nWeight: ${info[2]}\nType: ${info[4]}`
    // console.log(text);
    const txt = document.createElement('p');
    txt.appendChild(document.createTextNode(text));
    const data = document.createElement("div");
    data.append(nm,txt);
    // console.log(info);
    infoDiv.appendChild(data);
    data.classList.add("info-div")
    foto.appendChild(image);
    pokemon.push(image, data);
    if (arrObj.length >0) {
        arrObj[current][0].classList.add("invisible");
        console.log()
        arrObj[current][1].classList.add("invisible");
    }
    arrObj.push(pokemon);
    current = arrObj.length - 1;

}

async function animateRight (obj, par) {
    const p = new Promise(function (resolve, reject) {
    let i = 0;
    function stepRight () {
        obj.style.left = `${par+i*5}px`;
        i++;
        if (i === 35) {
            clearInterval(id);
            obj.style.left = `50px`;
            resolve("moved");
        }
    }
    const id = setInterval (stepRight, 1);
})
    return p
}

async function animateLeft (obj, par) {
    const p = new Promise(function (resolve, reject) {
    let i = 0;
    function stepRight () {
        obj.style.left = `${par-i*5}px`;
        i++;
        if (i === 35) {
            clearInterval(id);
            obj.style.left = `50px`;
            resolve("moved");
        }
    }
    const id = setInterval (stepRight, 1);
})
    return p
}

async function moveRight() {
    // debugger;
    if (current === arrObj.length - 1) {return}
    arrObj[current+1][0].classList.remove("invisible");
    arrObj[current+1][0].style.left = "225px";
    prom = Promise.all([animateLeft (arrObj[current+1][0], 225), animateLeft (arrObj[current][0], 0)]);
    await prom;
    arrObj[current][0].classList.add("invisible");
    arrObj[current][1].classList.add("invisible");
    current++;
    arrObj[current][1].classList.remove("invisible");
};

async function moveLeft() {
    if (current === 0) {return}
    arrObj[current-1][0].classList.remove("invisible");
    arrObj[current-1][0].style.left = "-175px";
    prom = Promise.all([animateRight (arrObj[current-1][0], -175), animateRight (arrObj[current][0], 0)])
    await prom;
    arrObj[current][0].classList.add("invisible");
    arrObj[current][1].classList.add("invisible");
    current--;
    arrObj[current][1].classList.remove("invisible");
};


function undisplayError () {
    errorDisplayed = false;
    errorP.classList.add("invisible");
    if (arrObj.length >0) {
        arrObj[current][1].classList.remove("invisible");
        arrObj[current][1].classList.remove("invisible");
    }
}


function displayError () {
    errorDisplayed = true;
    errorP.classList.remove("invisible");
    if (arrObj.length >0) {
        arrObj[current][1].classList.add("invisible");
        arrObj[current][1].classList.add("invisible");
    }
}

function displaySearch () {
    searchImg.classList.remove("invisible");
    if (arrObj.length >0) {
        arrObj[current][0].classList.add("invisible");
        arrObj[current][1].classList.add("invisible");
    }
}

function undisplaySearch () {
    searchImg.classList.add("invisible");
    if (arrObj.length >0) {
        arrObj[current][0].classList.remove("invisible");
        arrObj[current][1].classList.remove("invisible");
    }
}


async function getPokemon () {
    try {
        displaySearch();
        const poke = await fetchOne("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        const num = Math.floor(Math.random() * 1279);
        const pokeObj = poke.results[num];
        ({name ,url} = pokeObj)
        // console.log(name);
        const onePokemon = await fetchOne(url);
        ({height, weight, id, types, sprites} = onePokemon)
        const image = sprites.front_default;
        const type = types[0].type.name;
        const pokemonInfo = [name, height, weight, id, type, image];
        undisplaySearch();
        displayPokemon(pokemonInfo);
    } catch {
        displayError();
        setTimeout(undisplayError, 3000);
        undisplaySearch();
    }
}
