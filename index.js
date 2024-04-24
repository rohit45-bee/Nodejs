const express = require("express");
const fs = require("fs");
const userRouter = require('./routes/user');
const {logReRes} = require("./middlewares");
const mongoose = require('mongoose');
const {connectMongoDb} = require('./connection')

const app = express();
const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/rohitb")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB Error", err));

 app.use(express.urlencoded({ extended: false }));
   
 app.use(logReRes("log.txt"));


app.use("/api/user",userRouter);

app.listen(PORT ,() => console.log(`server started at PORT : ${PORT}`))