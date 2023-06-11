const express=require("express")
const mongoose = require('mongoose')
const cors=require("cors")
const app=express()
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/myusers").then(()=>{
    console.log('data base connected')
})
.catch((err)=>{
    
    console.log(err)
})
const userSchema=new mongoose.Schema({
   _id:{
    type:String,
    require:true
   },
  
  first_name:{
    type:String,
    maxLength:20
  },
  email:{
    type:String,
    maxLength:320
  }
});
const User=mongoose.model("Userr",userSchema)

app.use(express.json())

app.post("/users",async(req,res)=>{
    try{
        const user=new User(req.body)
        //user.created_at=new Date()
       // user.updated_at=user.created_at
        const createdUser=await user.save()
        res.status(200).json(createdUser)
        //res.json(createdUser)
    }catch(err){
         console.error("error creating user",err)
         res.status(500).json({message:"internal server error"})
    }
})

app.get("/users",async(req,res)=>{
    try{
        const user=await User.find()
        if(user){
           // res.json(user)
            res.status(200).json(user)
        }else{
            res.status(404).json({message:"user not found"})
        }
    }catch(err){
        console.error('Error getting user', err);
        res.status(500).json({message:"internal server err"})
    }
})

// Get a user by ID
app.get('/users/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findById(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error getting user', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.put("/users/:id",async(req,res)=>{
    try{
        const id=req.params.id
        const updates={
            ...req.body,
           // updated_at:new Date()
        };
        const updateduser=await User.findByIdAndUpdate(id,updates)
        if(updateduser){
            res.status(200).json(updateduser)
        }else{
            res.status(404).json({message:"user not found"})
        }
    }catch(err){
        console.error('Error updating user',err)
        res.status(500).json({error:"internal server error"})
    }

})

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const deletedUser = await User.findByIdAndDelete(id);
      if (deletedUser) {
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error deleting user', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  
  
app.listen(7000,()=>{
    console.log("running port 7000")
})