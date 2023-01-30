const theForm = document.forms[0];


// Retrieve the form and console.log it.
console.log(theForm);
// Retrieve the inputs by their id and console.log them.
const fname = theForm.fname;
console.log(fname);

// Retrieve the inputs by their name attribute and console.log them.
const lname = theForm.elements.lname
console.log(lname);
const sub = theForm.elements.submit;
console.log(sub);
// When the user submits the form (ie. submit event listener)
theForm.addEventListener ("submit" , myAction);
function myAction (e) {
    e.preventDefault();
    console.log(e);
    const fnameVar = e.target.fname.value;
    console.log(fnameVar);
    const lnameVar = e.target.lname.value;
    const fnameLi = document.createElement("li");
    fnameLi.appendChild(document.createTextNode(fnameVar));
    const lnameLi = document.createElement("li");
    lnameLi.appendChild(document.createTextNode(lnameVar));
    const myUl = document.querySelector(".usersAnswer");
    myUl.appendChild(fnameLi);
    myUl.appendChild(lnameLi);

}
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.