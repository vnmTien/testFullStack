const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

const authentication = async (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if(!bearerToken){
        return res.status(401).json({message: "Ban chua dang nhap"})
    }
    const token = bearerToken.split(" ")[1]
    try {
        const verify_token = jwt.verify(token,process.env?.SECRET_KEY)

        if(!verify_token){
            return res.status(401).json({message: "You are not logged in"})
        }

        const userId = verify_token?.userId

        const checkUser = await userModel.findById(userId)

        if(!checkUser){
            return res.status(404).json({message: "Not Found"})
        }

        req.user = checkUser

        next()

    } catch (error) {
        console.log(error)
        return res.status(401).json({message: "You are not logged in"})
    }
}

module.exports = authentication