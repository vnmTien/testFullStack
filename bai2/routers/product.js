const { getProduct, getProductInStockLess100 } = require("../controllers/product")

const router = require("express").Router();


router.get("/", getProduct);
router.get("/less100", getProductInStockLess100);


module.exports = router;