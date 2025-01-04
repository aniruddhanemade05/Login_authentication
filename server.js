const express = require("express");
const app = express()

const dotenv = require("dotenv")
dotenv.config()

const mongoose = require('mongoose')

let bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

//connect with db
mongoose.connect('mongodb+srv://aniruddhanemade:123ani@cluster0.wsbuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
        useUnifiedTopology:true,
        useNewUrlParser:true
    }
).then(()=>{
    console.log("connected to db")
})

//stitching to rout
require('./routes/userRoutes')(app)

//creation of server
app.listen(process.env.PORT,()=>{
    console.log(`listning got started!! at ${process.env.PORT}`)
})