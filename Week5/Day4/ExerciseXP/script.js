// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

async function doTheJob () {
    const res = await fetch("https://www.swapi.tech/api/starships/9/");
    const jsRes = await res.json();
    console.log(jsRes.result);
}

doTheJob();

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling'); // calling
    let result = await resolveAfter2Seconds(); // waiting for 2 sec, meantime doTheJob executed
    console.log(result); // resolved
}

asyncCall();