const theForm = document.forms.theForm;

const doTheStuff = (e) => {
    obj = {};
    e.preventDefault();
    obj["name"] = e.target.name.value;
    obj["lastname"] = e.target.lastname.value;
    console.log(obj);

    str = JSON.stringify(obj);
    const sec = document.querySelector("#main");
    sec.append(document.createTextNode(str));
}

theForm.addEventListener("submit", doTheStuff);

