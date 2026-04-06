const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connect_database = require('./config/database')
const errrorMiddleware = require('./middlewares/error')

// Setting up config.env file variables
dotenv.config({
    path: './config/config.env'
})

// connecting to database
connect_database()

// Set body parser
app.use(express.json())

// Importing all routes
const jobs = require('./routes/jobs')

app.use('/api/v1', jobs);

// Middleware to handle errors
app.use(errrorMiddleware);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} in ${process.env.NODE_ENV}`)
})