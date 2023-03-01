const {
    getAllProducts,
    getProductById,
    insertProduct,
    updateProduct
} = require ('../modules/products.js');
// Read get all products 

const _getAllProducts = (req, res) => {
    getAllProducts()
    .then (data => {
        res.json(data)
    })
    .catch (err => {
        console.log (err);
    })
}

const _getProductById = (req, res) => {
    getProductById(req.params.id)
    .then (data => {
        res.json(data)
    })
    .catch (err => {
        console.log (err);
    })
}
const _insertProduct = (req, res) => {
    insertProduct(req.body)
    .then (data => {
        res.json(data)
    })
    .catch (err => {
        console.log (err);
    })
}

const _updateProduct = (req, res) => {
    updateProduct(req.body)
    .then (data => {
        res.json(data)
    })
    .catch (err => {
        console.log (err);
    })
}
module.exports = {
    _getAllProducts,
    _getProductById,
    _insertProduct,
    _updateProduct
}