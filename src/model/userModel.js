const mongoose = require("mongoose")


const userModel = new mongoose .Schema({

    name :{
        type:String,
        required:true,
        
    },
    phoneNo:{
        type:String,
        required:true,
        unique:true
    },
    email :{
        type:String,
        required:true,
       unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:15,
       
    },
    isDeleted:{
        type:Boolean,
        default:false,
    },
   
},{timestamps:true



})
module.exports = mongoose .model("user",userModel);