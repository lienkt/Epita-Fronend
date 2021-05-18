require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const productRoute = require('./routes/producsRoutes')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/ErrorHandler')
const connectDB = require('./middlewares/connectDB')
connectDB()

const app = express()

app.use(morgan('dev'))
app.use(cors('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).send('It works!')
})

app.use('/products', productRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(3000, () => {
    console.log('Server listen on http://localhost:3000')
})