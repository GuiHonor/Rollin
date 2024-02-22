const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL).then(() => {
    console.log('Mongo deu bom')
}).catch(error => {
    console.log(error)
})

module.exports = mongoose