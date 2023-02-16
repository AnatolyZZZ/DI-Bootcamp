arrObj = [];
let current;
const infoDiv = document.querySelector("#info");
const foto = document.querySelector("#foto");
const spawn = document.querySelector("#green");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

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

async function animateRight (obj) {
    const p = new Promise(function (resolve, reject) {
    let i = 0;
    function stepRight () {
        obj.style.left = `${i*5}px`;
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
    arrObj[current][0].classList.add("invisible");
    arrObj[current][1].classList.add("invisible");
    current++;
    arrObj[current][0].classList.remove("invisible");
    arrObj[current][1].classList.remove("invisible");
};

async function moveLeft() {
    if (current === 0) {return}
    arrObj[current-1][0].classList.remove("invisible");
    arrObj[current-1][0].style.left = "-175px";
    await animateRight (arrObj[current-1][0])
    await animateRight (arrObj[current][0]);
    arrObj[current][0].classList.add("invisible");
    arrObj[current][1].classList.add("invisible");
    current--;
    arrObj[current][1].classList.remove("invisible");
};



async function getPokemon () {
    const poke = await fetchOne("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const num = Math.floor(Math.random() * 1279);
    const pokeObj = poke.results[num];
    ({name ,url} = pokeObj)
    // console.log(name);
    const onePokemon = await fetchOne(url);
    ({height, weight, id, types, sprites} = onePokemon)
    const image = sprites.front_default;
    const type = types[0].type.name;
    const pokemonInfo = [name, height, weight, id, type, image]
    displayPokemon(pokemonInfo);
}

getPokemon();