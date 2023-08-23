const mongoose = require("mongoose")

const inventory = mongoose.Schema({
    sku: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    },
    instock: {
        type: Number,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model("inventory", inventory)