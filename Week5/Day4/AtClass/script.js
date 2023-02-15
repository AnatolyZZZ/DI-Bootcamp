// Exercise Game - The word game You need to create 4 functions, each of them return a promises
// The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject else - resolve with the name of the 2 ppl in an array
// The 2nd function, receives a noun if the noun is less than 3 letters - reject else - resolve with the noun
// The 3rd function, receives a city if the city doesn't start with an uppercase letter -> reject else - resolve with the city name
// The 4st function, receives a verb (finishing with "ing") if it doesn't end with "ing" -> reject (use the endWith string method) else resolve with the verb
// The last function, is an async function - it receives all the above promises, and return a sentence with it Ex: "Beyonce is playing football with Barack Obama in Paris"

// async function takeNames () {
//     const name1 = prompt("First name");
//     const name2 = prompt("Second name");
//     if (typeof name1 != "string" || typeof name2 != "string") {
//         throw new Error("Not a string!")
//     } else return [name1, name2]
// }

// async function chekNoun () {
//     noun = prompt("Nown please")
//     if (noun.length < 3) {
//         throw new Error("Less then 3 symbols")
//     } else return noun
// }
// async function checkCity () {
//     city = prompt("Where?")
//     if (!city[0].match(/[A-Z]/)) {
//         throw new Error("First letter is not capital")
//     } else return city
// }
// async function makeSentence (verb) {
//     if (!verb.endsWith('ing')) { throw Error("wrong verb")} else {
//         const names = await takeNames();
//         const nown = await chekNoun();
//         const city = await checkCity();
//         const str = `${names[0]} ${verb} ${nown} with ${names[1]} in ${city}`
//         console.log(str);
//         return str;
//     }
// }

// makeSentence("is playing");
// console.log("This is execuded in main while making sentene");
main = document.querySelector("#main")

async function fetchWord () {
    const resp =  await fetch("http://random-word-api.herokuapp.com/word?number=1");
    if (resp.status != 200) { throw new Error("smth wrong")} 
    const word = await resp.json();
    return word[0];
}

async function fetchGif (word) {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    if (resp.status != 200) { throw new Error("smth wrong")} 
    const url = await resp.json();
    if (url.data.length === 0) {
        console.log ("str 55")
        throw new Error ("Couldnt find")
        
    }
    console.log(url.data.images.fixed_width.url)
    return url.data.images.fixed_width.url;
}

async function appendGif () {
    try {
        const word = await fetchWord();
        const url = await fetchGif(word);
        addGif(url);
    } catch {
        (err) => {
            console.log("error")
            console.log(err)
        };
    }

}
function addGif(adress) {
    console.log(adress);
    const img = document.createElement("img");
    img.setAttribute("src", adress);
    main.appendChild(img);
}

appendGif();