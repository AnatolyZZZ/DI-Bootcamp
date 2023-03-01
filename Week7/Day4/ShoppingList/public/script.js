const theForm = document.forms[0];

theForm.addEventListener("submit", addProduct);

async function addProduct (e) {
    e.preventDefault();
    const obj = Object.fromEntries(new FormData(theForm));
    const req = {
        method : "POST",
        headers : { "Content-Type" : "application/json"},
        body : JSON.stringify(obj)
    }
    await fetch("/add", req);
    window.location.assign('/items.html');
}