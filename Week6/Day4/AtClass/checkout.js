const cart = JSON.parse(window.localStorage.getItem('cart'));
const main = document.getElementById('main');
const backtomain = document.getElementById('toindex');
const checkout = document.querySelector('#btn2')
const sec2 = document.querySelector('#sec2')
console.log(checkout);

let total = 0;

const checkoutCart = () => {
    window.localStorage.clear();
    main.innerHTML = '';
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(`The total price is ${total}`));
    main.appendChild(p);

}

for ({name, price} of cart) {
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(`Product: ${name} of price ${price}`));
    main.appendChild(p);
    total += price;
}

backtomain.addEventListener("click", clearAll);
checkout.addEventListener('click', checkoutCart);



function clearAll () {
    window.localStorage.clear();
}