const {_getAllProducts,
_getProductById,
_insertProduct,
_updateProduct } = require("../controllers/products.js");
const express = require('express');

const router = express.Router();

router.get('/', _getAllProducts);
router.get('/:id', _getProductById);
router.post("/", _insertProduct);
router.put('/', _updateProduct)

module.exports = router