const services = require("./product.Services.js")
const validator = require('express-joi-validation').createValidator({})
const { schema } = require('./products.model')

function config (app){

    app.get('/products', 
        services.getAllProducts
        )

    app.post('/products', 
        validator.body(schema), 
        services.saveProduct
        )

    app.put('/products', 
        validator.body(schema), 
        services.editProduct
        )

    app.delete('/products/:id', 
        services.deleteProduct
        )

}

module.exports = { config }