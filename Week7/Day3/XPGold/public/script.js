const show_all = document.querySelector("#show_all");
const root = document.getElementById("show_screen");
const show_id = document.querySelector("#search_by_id");
const add_one = document.getElementById("add_one");

show_id.addEventListener("submit", showOne);
add_one.addEventListener("submit", addOne);
show_all.addEventListener("click", showAll);


function showResp(arr) {
    // console.log(arr);
    root.innerHTML = arr.map(elt => `<p>Name: ${elt.name} - price:${elt.price}$</p>`).join("\n")
}

async function addOne (e) {
    e.preventDefault();
    const new_item = Object.fromEntries(new FormData(add_one));
    console.log(JSON.stringify(new_item));
    const resp = await fetch('/items', {method : "POST", headers : {'Content-Type': 'application/json'} , body : JSON.stringify(new_item)});
    const arr = await resp.json()
    showResp(arr);
}

async function showOne (e) {
    e.preventDefault();
    const id = e.target.id.value;
    try {
        const resp = await fetch(`/items/${id}`);
        // console.log(resp);
        const arr = await resp.json()
        showResp(arr);
    } catch (err){
        console.log(err);
    }
}

async function showAll () {
    try {
        const resp = await fetch('/items');
        
        console.log(resp);
        const arr = await resp.json()
        // const arr =  JSON.parse(resp);
        showResp(arr);
    } catch (err){
        console.log(err);
    }
}