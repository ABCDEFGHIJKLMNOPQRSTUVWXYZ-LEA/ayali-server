const mongoose = require('mongoose') 
const userSchema =  new mongoose.Schema({
userName:String,
userPassword:String
})
module.exports = mongoose.model('User', userSchema);