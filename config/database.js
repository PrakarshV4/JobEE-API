const mongoose = require('mongoose')

const connect_database = () => {
    mongoose.connect(process.env.DB_LOCAL_URI)
    .then(con => {
        console.log(`MongoDb database connected with host ${con.connection.host}`)
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = connect_database