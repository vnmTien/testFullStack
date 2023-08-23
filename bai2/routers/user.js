const router = require('express').Router()
const { login, getUser, createUser } = require('../controllers/user')
const authentication = require('../middlewares/auth')

router.get('/', authentication, getUser);
router.post('/login', login);
router.post('/register', createUser);

module.exports = router