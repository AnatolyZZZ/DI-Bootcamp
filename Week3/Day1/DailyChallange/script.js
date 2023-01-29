// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?
planets = ['mercury' , 'venus', "earth", "mars"];
nMoon = [0, 3, 2, 1];

colors = ['gray','white', "blue", "red"];

const sect = document.getElementsByClassName("listPlanets")[0];
// console.log(sect);

for (let i = 0; i < 4; i++) {
    const curPl = document.createElement("div");
    curPl.classList.add("planet", colors[i]);
    sect.appendChild(curPl);
    for (let j = 0; j < nMoon[i]; j++) {
        const curMn = document.createElement("div");
        curMn.classList.add("moon");
        curMn.style.left = `${j * 170 +50}px`
        curMn.style.top = `35px`
        curPl.appendChild(curMn);
    }
    // console.log(curPl);
}

