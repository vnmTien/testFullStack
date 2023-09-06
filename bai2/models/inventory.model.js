const mongoose = require("mongoose")

const inventory = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
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
    },
    orders: [{ type: mongoose.Schema.Types.Number, ref: "order" }]
},{
    timestamps: true
})

module.exports = mongoose.model("inventory", inventory)