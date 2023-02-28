const theForm = document.getElementById('theForm');

theForm.addEventListener("submit", procced);

function procced (e) {
    e.preventDefault();
    const {email, messege} = Object.fromEntries(new FormData(theForm));
    open(`/formData?email=${email}&messege=${messege}`)
}