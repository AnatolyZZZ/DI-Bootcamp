const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const __addItem = require('./additem.js')
const __showItems = require('./showitems.js')

const app = express();
app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
dotenv.config()

app.use('/',express.static(__dirname + '/public'));

app.listen(process.env.PORT, ()=>{
    console.log(`run on port ${process.env.PORT}`);
  })

app.post('/add', __addItem);
app.get('/allitems', __showItems);