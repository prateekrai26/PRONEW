const express= require("express");
const app= express();
const path = require('path')
require("./db/mongoose")
const User= require("./models/user");
const hbs= require("hbs")
const userRoute= require("./routes/user");
const bodyParser= require("body-parser")
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(userRoute);
app.set("view engine" , ".hbs")
const publicDirectoryPath = path.join(__dirname,'../')

app.use(express.static(publicDirectoryPath))
// const temp= new User({
//     name:"Prateek",
//     age:20,
//     email:"hi.prateekrai@gmail.com",
//     password:"2602",
//     type:"Customer"
// })
// temp.save()

// User.find({},(err,res)=>
// {
//     if(err){
//     throw new Error("Error")
//     return;
//     }
//     console.log(res);
// })

// User.find({_id:"5e355473c9a26948a83f6cf3"},(err,res)=>
// {
//     if(err){
//     throw new Error("Error")
//     return;
//     }
//     console.log(res);
// })


app.get("/",(req,res)=>
{
    res.render("index")
})


app.get("/user",(req,res)=>
{
    res.render("index")
})

app.get("/products",(req,res)=>
{
    res.render("product")
})

app.listen("3000",()=>
{
    console.log("started");
})

