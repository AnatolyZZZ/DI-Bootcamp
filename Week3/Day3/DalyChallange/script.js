const myInput = document.querySelector("#superinput");

myInput.addEventListener("keypress", check);
myInput.addEventListener("keyup", check);
// myInput.addEventListener("keydoun", check);

function check (e) {
    pattern = /[a-z]/;
    // console.log(e.target.value)
    val = e.target.value;
    last = val.charAt(val.length - 1);
    last = last.toLowerCase();
    if (!pattern.test(last)) {
        val = val.slice(0, -1);
        // console.log(last);
        // console.log(val);
        e.target.value = val;
        // console.log(e.target);
    }
    
}