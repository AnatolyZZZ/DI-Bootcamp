const {db} = require("./config/db.js");

const addItem = (item) => {
   return db("shoppinglist")
    .insert(item)
    .returning("*")
}

const __addItem = (req, res) => {
    addItem(req.body)
    .then (data => {
        res.json(data)
    })
    .catch (err => {
        console.log (err);
    })
}


module.exports = __addItem;