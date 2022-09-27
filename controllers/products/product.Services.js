const DAO = require("./products.DAO.memory.js")

async function getAllProducts(req, res, next) {
    try{
        const products = await DAO.getAllProducts()
        res.send(JSON.stringify(products))
    }catch(err){
        res.status(404).send(err.message)
    }
}

async function saveProduct(req, res, next) {
    try{
        const product = req.body
        const ans = await DAO.saveProduct(product)
        res.send(JSON.stringify(ans))
    }catch(err){
        res.send(err.message)
    }
}

async function editProduct(req, res, next) {
    try{
        const product = req.body
        const ans = await DAO.editProduct(product)
        res.send(JSON.stringify(ans))
    }catch(err){
        res.send(err.message)
    }
}

async function deleteProduct(req, res, next) {
    try{
        const id = req.params.id
        const ans = await DAO.deleteProduct(id)
        res.send(JSON.stringify(ans))
    }catch(err){
        res.send(err.message)
    }
}




module.exports = { getAllProducts, saveProduct, editProduct, deleteProduct}