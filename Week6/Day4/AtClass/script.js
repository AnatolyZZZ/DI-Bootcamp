const main = document.querySelector('#main');
const btn = document.querySelector('#checkout');
let cart = [] || JSON.parse(window.localStorage.getItem('cart'));
const  products = [
    {
        id: 0,
        name: "Deluxe Bicycle",
        url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
        price: 499.98
    },
    {
        id: 1,
        name: "Super Deluxe bagpack",
        url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
        price: 134.99
    },
    {
        id: 2,
        name: "Super Duper Scooter",
        url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
        price: 1090.95
    },
    {
        id: 3,
        name: "Smartphone",
        url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
        price: 399.99
    }
];

(function () {
for (product of products ) {
    const d = document.createElement('div');
    d.setAttribute('id', product.id)
    d.classList.add('product');
    const image = document.createElement('img');
    image.setAttribute('src', product.url);
    d.appendChild(image);
    const id = document.createElement('p');
    id.appendChild(document.createTextNode(product.id));
    d.appendChild(id);
    const n = document.createElement('p');
    n.appendChild(document.createTextNode(product.name));
    d.appendChild(n);
    d.addEventListener('click', onClick, true)
    main.appendChild(d);
}
})();

function onClick (e) {
    const prod = e.currentTarget;
    const id = prod.getAttribute('id');
    const obj = {
        name : products[id].name,
        price: products[id].price
    }
    cart.push(obj);
    window.localStorage.setItem('cart', JSON.stringify(cart));
}

// Using a self invoking function, and using the DOM - add the products to the page and make them clickable.
// MANDATORY --> add to each item an id and a class attribute.
// The user clicks on the item to add them to his cart. The cart is an array of items, saved in the localstorage.
// Each item is an object containing the name of the product and the price.
// For now, the user can add only 1 product per category (meaning 1 scooter, 1 bicycle ect...)
// Bonus: use a Class to create each item
// When the user is done with his shopping, he will click on the "Pay button" (which is actually an tag) and it will redirect him to another HTML page. This HTML page is linked to another Javascript file. Using the DOM display :
// all the items that the user bought : MANDATORY --> use object destructuring
// the total price he needs to pay
// a "Submit payment" Button
// When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.
// Bonus: the user can add multiple times, the same product. --> Each product item will be an object containing the name of the product, the price and the quantity.