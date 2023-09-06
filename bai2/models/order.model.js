const inventory = require("./inventory.model")
const mongoose = require("mongoose")


const order = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    item: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    products: {
        type: mongoose.Schema.Types.Number,
        ref: 'inventory'
    }
})

module.exports = mongoose.model("order", order)

