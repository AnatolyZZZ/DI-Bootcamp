const {db} = require("./config/db.js");

const showItems = () => {
    return db("shoppinglist")
    .select("*")
}

const __showItems = (req, res) => {
    showItems()
    .then (data => {
        res.json(data)
    })
    .catch (err => {
        console.log (err);
    })
}

module.exports = __showItems;