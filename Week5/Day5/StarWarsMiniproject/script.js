const serchBtn = document.querySelector("#search");
const loading = document.querySelector("#loading");
const person = document.querySelector("#person_info")

serchBtn.addEventListener("click", getCharacter);

function addToPage (...pers) {
    const n = document.createElement("p");
    n.appendChild(document.createTextNode(name));
    const g = document.createElement("p");
    g.appendChild(document.createTextNode(`Gender: ${gender}`));
    const h = document.createElement("p");
    h.appendChild(document.createTextNode(`Height: ${height}`));
    const b = document.createElement("p");
    b.appendChild(document.createTextNode(`Birth Year: ${birth_year}`));
    const w = document.createElement("p");
    w.appendChild(document.createTextNode(`Homeworld: ${world_name}`));
    person.append(n, g, h, b, w);
}

function displayProblem () {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode("Something went wrong :("));
    person.appendChild(p);
}

async function getCharacter() {
    loading.classList.remove("invisible");
    person.innerHTML = "";
    let num = Math.floor(Math.random() * 82) + 1;
    try {
        const pers = await fetchOne(`https://www.swapi.tech/api/people/${num}`);
        ({name ,height, gender, birth_year, homeworld} = pers)
        const world = await fetchOne(homeworld);
        world_name = world.name;
        const persNew = {...pers, world_name};
        addToPage(persNew);
        console.log(persNew);
    } catch {
        displayProblem();
    }
    
    loading.classList.add("invisible");
}

async function fetchOne (url) {
    const response = await fetch(url);
    result = await response.json();
    return result.result.properties;
}

