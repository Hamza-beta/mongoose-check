const express=require("express")
const ConnectDb = require("./config/connectDB")
const route = require("./routes/person")
const app=express()
const port=3000
require("dotenv").config()
ConnectDb()


app.use(express.json())
app.use("/api/persons",route)
app.listen(process.env.port,()=>{
    console.log(`server is running on port ${process.env.port}`)
})

