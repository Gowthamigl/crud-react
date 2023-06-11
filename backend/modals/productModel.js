//const mongoose = require('mongoose')
import mongoose from "mongoose"
const Product = new mongoose.Schema({

    name:{
     type:String,
     required:true   
    },
    price:{
        type:Number,
        required:true
    }
})

export default Product
//module.exports = mongoose.model('products',productSchema)