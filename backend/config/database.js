//const mongoose = require('mongoose')
import mongoose from "mongoose";
 const db=mongoose.connect("mongodb://127.0.0.1:27017/merndbb").then(()=>{
    console.log('data base connected')
})
.catch((err)=>{
    
    console.log(err)
})
export default db;