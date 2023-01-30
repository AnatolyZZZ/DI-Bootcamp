const theForm = document.forms.MyForm;
const radius = theForm.elements.radius;
const volume = theForm.elements.volume;

theForm.addEventListener("submit", calcVolume);

function calcVolume (e) {
    e.preventDefault();
    const r = e.target.radius.value;
    const vol = 4/3*3.14*r*r*r;
    volume.value = vol;
}


// console.log(theForm);