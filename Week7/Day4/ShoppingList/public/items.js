const main = document.getElementById("main");

const items = fetch('/allitems')
.then (
    resp => resp.json()
)
.then (
    data => {
        main.innerHTML = data.map(elt => `<p>${elt.name} : ${elt.amount}</p>`).join('')
    }
)