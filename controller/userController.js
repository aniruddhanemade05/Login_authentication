const Usermodel = require("../model/userModel")
let usermodel = require("../model/userModel")
const jwt = require('jsonwebtoken')

module.exports.HandelUserSignUp=(req,res)=>{
    usermodel.create(req.body).then(()=>{
        res.json({'message':'registered successfully'}).status(201)
    }).catch((err)=>{
        res.json({'message':"user not found",error : err}).status(500)
    })
}

module.exports.HandelUserLogin=(req,res)=>{
    let{email} = req.body;
    Usermodel.find({'email':email}).then((response)=>{
        if(true){
           jwt.sign(req.body,process.env.SECRET_KEY,(err,token)=>{
            if(err) return
            else{
                res.json({
                    message : "login successful",
                    token : token
                })
            }
           })
        }
    })
}