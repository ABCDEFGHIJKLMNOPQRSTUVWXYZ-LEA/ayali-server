const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userName1="אילי"
const userName2="רבקה"
const password1="12345Ss!"
const password2 = "54321Ss!"
const u3 = async()=>{
    const userPassword1 = await bcrypt.hash(password1,10)
const userPassword2 = await bcrypt.hash(password2,10)

const u=await User.create({
      userName:userName1,
      userPassword:userPassword1
    })
     const u2=await User.create({
      userName:userName2,
      userPassword:userPassword2
    })
}
    u3()
const login = async (req, res) => {
    const { userName, userPassword } = req.body
    if (!userName || !userPassword) {
        return res.status(401).json({ message: "all fileds are requiered" })
    }
    const foundUser = await User.findOne({userName}).lean()
    if (!foundUser)
        return res.status(401).json({ message: "Unauthourized" })
    const match = await bcrypt.compare(userPassword,foundUser.userPassword)
    const userInfo = {
        _id:foundUser._id,
        userName,
        userPassword
    }
        const token = jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET)
        res.json(token)
    if(!match)
                return res.status(401).json({ message: "Unauthourized" })

}
module.exports = { login }
