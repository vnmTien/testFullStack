const orderModel = require("../models/order.model")

const getOrder = async (req, res) => {
    try {
        const order = await orderModel.find().populate({ path: 'products', select: 'description -_id'});

        return res.status(200).json({message: "Get order success", order})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

module.exports = {
    getOrder
}