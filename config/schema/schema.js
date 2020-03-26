const { Schema, model } = require('mongoose')

let task_schema = new Schema({
    task: {
        type: String,
        required: true
    },

    task_body: {
        type: String,
        // required: true
    },

    join: {
        type: Date,
        default: new Date()
    },

    status: {
        type: Boolean
    }
})

module.exports = model('tasks', task_schema)