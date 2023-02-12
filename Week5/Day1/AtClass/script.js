const myForm = document.forms[0];
console.log(myForm);

myForm.addEventListener("submit", validation);

function validation(e) {
   
    const limit = +e.target.limit.value;
    console.log(limit);
    const query = e.target.query.value;
    console.log(query.length);
    if (limit !=10 || query.length < 4) {
        e.preventDefault();
        console.log ("Preventing")
    }
}