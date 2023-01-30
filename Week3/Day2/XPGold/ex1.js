const mySelector = document.querySelector("#genres");
mySelector.addEventListener("change", displaySelect);
displayed = document.querySelector("#onsel");

function displaySelect (e) {
    let selectedValue = mySelector.options[mySelector.selectedIndex].value;
    console.log(selectedValue);

    // selectedValue.style.textTransform = 'capitalize';

    displayed.textContent = selectedValue;
}

const newOpt = document.createElement("option");
newOpt.textContent = "Classic";
newOpt.setAttribute("value", "classic");
newOpt.setAttribute("selected", true);
mySelector.appendChild(newOpt);
mySelector.options[1].removeAttribute("selected");




