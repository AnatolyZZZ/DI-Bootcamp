const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

let products = [
    {
        id : 11,
        name : "name1",
        price: 100
    },
    {
        id : 12,
        name : "name2",
        price: 102
    },
    {
        id : 13,
        name : "name3",
        price: 103},
]

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/items', (req, res) => {
    res.json(products);
})

app.post('/items', (req, res) => {
    console.log(req.body);
    const new_product = {
        id : products.length + 11,
        name : req.body.name,
        price : req.body.price
    }
    products.push(new_product);
    console.log(products);
    res.json(products);
})

app.get('/items/:id', (req, res) => {
    const id = req.params.id;
    const index = products.findIndex(elt => elt.id == id);
    if (index === -1) return res.status(404).send([{name : "Not found", price : "unknown "}]);
    res.send([products[index]]);
})

app.use('/', express.static(__dirname+'/public'));

app.listen(process.env.SERVER_PORT);
console.log(`listening to ${process.env.SERVER_PORT}`)

