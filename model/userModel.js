let mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}, { timestamps: true })
const Usermodel = mongoose.model("userdoc",userSchema)
module.exports = Usermodel ;