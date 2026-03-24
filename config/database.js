const mongoose = require('mongoose')

const connect_database = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`MongoDb database connected with host ${con.connection.host}`)
    })
}

module.exports = connect_database