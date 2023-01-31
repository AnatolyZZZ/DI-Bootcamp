const banner = document.querySelector(".displayed");

const progressbar = document.querySelector(".green");
console.log(progressbar);

setTimeout (disp , 5000);

let seconds = 10;

function disp (){
    banner.classList.toggle("displayed");

    id = setInterval(fc, 1000);
}

function fc () {
    seconds--
    banner.textContent = `${seconds} left`
    if (seconds == 0) {
        clearInterval(id);
    }

    progressbar.style.width = `${100 - seconds * 10}%`
}