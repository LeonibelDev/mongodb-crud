const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1:27017/mongo_crud'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose