// We will create a form that ask the user for their email. Then, using a function we will check the validity of the user’s input.

// Add an input that has a type="email" to your form.
// Write your own javascript validation function to check if the entered value is a valid email address. The address should contain some valid characters, and the @ sign, more characters then a . (period) and some more characters.
// On “submit”, the validation function should run and validate the email address.

const email = document.querySelector("#email");
console.log(email);

email.addEventListener("change", checkValid);

function checkValid (e) {
    pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const value = e.target.value;
    console.log(value);
    if (!pattern.test(value)) {
        alert("Wrong email!");
    }
}


var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 
}

getLocation();