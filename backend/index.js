const express = require("express")
const app = express()
const port = 3000
const connectDB = require('./config/db')
const dotenv = require('dotenv')
dotenv.config()





connectDB()

app.listen(port,(req,res)=>{
    console.log('serveur lancé dans le port ' + port)
})