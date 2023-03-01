const {db} = require('../config/db.js')

const getAllProducts = () => {
    return db('products')
    .select('id', 'name', 'price')
    .orderBy('name');
}
const getProductById = (pid) => {
    return db('products')
    .select('id', 'name', 'price')
    .orderBy('name')
    .where({id:pid});
}

const insertProduct = (product) => {
    return db('products')
    .insert(product)
    .returning()
}

const updateProduct = (product) => {
    return db('products')
    .update(product)
    .where({id:product.id})
    .returning("*")
}


module.exports = {
    getAllProducts,
    getProductById,
    insertProduct,
    updateProduct
}