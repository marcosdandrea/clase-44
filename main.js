require("dotenv").config()

const express = require('express')
const app = express()
const { graphqlHTTP } = require('express-graphql')

const productsAPI = require('./controllers/products/products.API')
const graphQL = require("./controllers/graphQL/graphQL")

app.use(express.json())

productsAPI.config(app)
app.use("/graphQL", graphqlHTTP({ 
    schema: graphQL.schema,
    rootValue:{
        getAllProducts: graphQL.getAllProducts,
        saveProduct: graphQL.saveProduct,
        editProduct: graphQL.editProduct,
        deleteProduct: graphQL.deleteProduct
    },
    graphiql: true
}))


app.use("/", (req, res) => {
    console.log({ detail: "Endpoint is not reachable:", url: req.url, params: req.params, method: req.method })
    res.status(404).send()
})

app.listen(process.env.PORT, () => {
    console.log("listening on port " + process.env.PORT)
})
