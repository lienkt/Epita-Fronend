const { v4: uuidv4 } = require('uuid');

const productModel = require('../models/productSchema')

const express = require('express')
const Router = express.Router()

const products = []

Router.get('/', (req, res) => {
    res.status(200).send(products)
})

Router.get('/:index', (req, res) => {
    const index = req.params.index
    res.status(200).send(products[index])
})

Router.post('/', function (req, res) {
    // let product = req.body
    // product.id = uuidv4()
    // products.push(product)

    let product = new productModel({
        name: req.body.name,
        price: req.body.price
    })

    product.save()
    .then(product => {res.status(200).send(product)})
    .catch(error => {next(error)});

    res.status(200).send(product)
})

Router.put('/', function (req, res) {
    res.status(200).send('Product update page')
})

Router.delete('/:productId', function (req, res) {
    const productId = req.params.productId
    products = products.filter(product => product.id !== productId)
    res.status(200).send(products)
})

module.exports = Router