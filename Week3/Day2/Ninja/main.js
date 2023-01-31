const billAmountInput = document.querySelector("#billamt");
const qualitySelector = document.querySelector("#serviceQual");
const nPeopleInput = document.querySelector("#peopleamt");
const theForm = document.forms[0];
var total;

theForm.addEventListener ("submit", evde);
function evde (e) {
    e.preventDefault();
}

var billAmount;
var serviceQuality = 0;
var numOfPeople;

function calculateTip () {
    billAmount = billAmountInput.value;
    billAmount = +billAmount;
    serviceQuality = qualitySelector[qualitySelector.selectedIndex].value;
    numOfPeople = nPeopleInput.value;
    console.log(numOfPeople);

    if (serviceQuality == 0 || billAmount == 0 || isNaN(billAmount)) {
        alert ("Please enter service quality and bill amount correctly")
    }

    if (numOfPeople == "" || isNaN(numOfPeople) || numOfPeople < 2) {
        numOfPeople = 1;
        const tagEach = document.querySelector("#each");
        tagEach.style.display = "none";
    }

    const total = (billAmount * serviceQuality) / numOfPeople;
    // total.toFixed(2);
    // console.log(total);
    const totalTip = document.querySelector("#totalTip");
    totalTip.style.display = "block";

    const spanTip = document.querySelector("#tip");
    const content = document.createTextNode("");
    spanTip.appendChild(content);
    spanTip.textContent = total.toFixed(2);

};

const btn = document.querySelector("#calculate");
btn.addEventListener ("click", calculateTip);


// Create a variable called billAmount that fetches the value of the input, which id is billAmt (check the HTML file) –> It’s the amount of the bill.
// Create a variable called serviceQuality that fetches the value of the input, which id is serviceQual (check the HTML file) –> It’s the quality of the service.
// Create a variable called numberOfPeople that fetches the value of the input, which id is numOfPeople (check the HTML file) –> It’s the number of people sitting at the table. 
// Create a condition :
// If serviceQuality is equal to zero, or billAmount is empty, alert the user to enter these values.
// Create another condition after the first one :
// If the input numberOfPeople is empty or is smaller than 1, set a default value of 1 to numberOfPeople and make sure that the tag which id is each, is not displayed (check the end of the HTML file).

// Create a variable named total: the value should be ( billAmount * serviceQuality ) / numberOfPeople (the outcome is the average tip each person should pay)

// Use the toFixed method to round total to two decimal points.

// Add the CSS property “display:block” to the tag which id is totalTip.


// Display the variable total in the tag which id is tip.
