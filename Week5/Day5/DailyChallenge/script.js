const fromSelect = document.querySelector("#from");
const toSelect = document.querySelector("#to");
const theForm = document.querySelector("#converter");
const swapBtn = document.querySelector("#swap");

(async function initialize() {
    try {
        const currenciesObj = await fethcOne("https://v6.exchangerate-api.com/v6/6946e06afacfaad38e7c2ce2/codes");
        const currencies = currenciesObj.supported_codes;
        addListOfCurrensies(currencies, fromSelect);
        addListOfCurrensies(currencies, toSelect);
    } catch (e) {
        alert(e.messege, e.lineNumber);
    }
    theForm.addEventListener("submit", convert);
    swapBtn.addEventListener("click", swap);
})()

function swap () {
    const fromId = theForm.from.selectedIndex;
    const toId = theForm.to.selectedIndex;
    // console.log("from", fromId);
    // console.log("to", toId);
    theForm.to.selectedIndex=fromId;
    theForm.from.selectedIndex=toId;

}


async function convert (event) {
    event.preventDefault();
    const from = event.target.from.value.slice(0,3);
    const to = event.target.to.value.slice(0,3);
    try {
        const curseObj = await fethcOne(`https://v6.exchangerate-api.com/v6/6946e06afacfaad38e7c2ce2/pair/${from}/${to}`);
        const curse = curseObj.conversion_rate;
        const amount = event.target.amount.value;
        event.target.result.value = (amount * curse).toFixed(4)+" "+to;
    } catch (err) {
        console.log(err);
    }
}

function addListOfCurrensies (arr , select) {
    for (elt of arr) {
        const str = `${elt[0]} - ${elt[1]}`;
        const text = document.createTextNode(str);
        const opt = document.createElement("option");
        opt.appendChild(text);
        select.appendChild(opt);
    }
}

async function fethcOne (url) {
   const resp = await fetch(url);
   if (resp.status !== 200) {
    throw new Error("couldn't fetch")
   } else {
    result = await resp.json();
    }
    return result;
}
