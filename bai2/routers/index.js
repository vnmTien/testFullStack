const router = require('express').Router();
const productRouter = require('./product');
const userRouter = require('./user');
const orderRouter = require('./order');

router.use('/order', orderRouter);
router.use('/product', productRouter);
router.use('/user', userRouter);

module.exports = router;