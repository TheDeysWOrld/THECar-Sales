const express =require("express");
const cors =require("cors");
const mongoose =require("mongoose");
const { append } = require("express/lib/response");

const app=express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
const port = process.env.PORT || 8009;

mongoose.connect("mongodb://localhost:27017/studentRegistration",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log(`Connection Successful`);
}).catch((err)=>{
    console.log(`No Connection ${err}`);
})

const userSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String
})
const User = new mongoose.model("User",userSchema)

//Routs

app.post("/login",(req,res)=>{
    console.log(req.body)
    const {email,passWord}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(passWord === user.password){
                res.send({message:"Login Successful",user:user})
            }else{
                res.send({message:"Incorrect Password"})
            }
        }else{
            res.send({message:"User not registered"})
        }
    })
})

app.post("/register",(req,res)=>{
    console.log(req.body)
    const {firstName,lastName,email,passWord}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already registered"})
        }else{
            const user = new User({
                fname:firstName,
                lname:lastName,
                email:email,
                password:passWord
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Successfully Regiatered"})
                }
            })
        }
    })
    
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})