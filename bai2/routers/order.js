const { getOrder } = require("../controllers/order")

const router = require("express").Router();


router.get("/", getOrder);


module.exports = router;