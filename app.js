const express = require('express');
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan");
const dotenv = require("dotenv")

dotenv.config();
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true }).then(()=>console.log("db connected"))
mongoose.connection.on('error',err =>{
    console.log(`DB Connection error ${err.message}`)
})

const postRoutes = require('./routes/post')

//midleware
app.use(morgan("dev"));


app.use("/",postRoutes)

const port = process.env.PORT || 8080;

app.listen(port,()=>console.log(`running on port ${port}`)) 