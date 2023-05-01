const express= require("express")
const mongoose = require("mongoose");
const dot = require("dotenv");
dot.config()
const app= express();
app.use(express.json());
const url = process.env.url;
const port = process.env.port;
const route = require("./route/router");

mongoose.connect("mongodb+srv://jassu_172:jassusharma123@cluster0.fhbdfgf.mongodb.net/travelShadule",{useNewUrlParser:true})
.then(()=>console.log("Db is connected"))
.catch((e)=>console.log(e.message));

app.use("/",route);
app.listen(3001,()=>console.log("App is live"))