const { getAllProducts,
        getProductById,
        insertProduct,
        updateProduct,
        deleteProduct,
        searchProduct
    } = require('../modules/products.js');

// Read - get method - all products
const _getAllProducts = (req, res) => {
  getAllProducts()
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    console.log(err);
  })
}
const _searchProduct = (req, res) => {
  searchProduct(req.query.q)
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    console.log(err);
  })

}

const _getProductById = (req,res) => {
  getProductById(req.params.id)
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    console.log(err);
  })
}

const _insertProduct = (req,res) => {
  insertProduct(req.body)
  .then(data => {
    // console.log(data)
    // _getAllProducts(req,res)
    res.json(data)
  })
  .catch(err => {
    console.log(err);
  })
}

const _updateProduct = (req,res) => {
  // console.log(req)
  updateProduct(req.params.id, req.body)
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    console.log(err);
  })
}

const _deleteProduct = (req,res) => {
  deleteProduct(req.params.id)
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    console.log(err);
  })
}

module.exports = {
  _getAllProducts,
  _getProductById,
  _insertProduct,
  _updateProduct,
  _deleteProduct,
  _searchProduct,
}
