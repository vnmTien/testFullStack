const mongoose = require('mongoose')

const user = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model("user", user)