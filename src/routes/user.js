let express= require("express")
const router = express.Router();
const User= require("../models/user")
router.get("/signup",(req,res)=>
{
  res.render("signup");
})
router.get("/login",(req,res)=>
{
  res.render("login");
})

router.get("/profile",(req,res)=>
{
  res.render("/profile")
})

router.post("/login",(req,res)=>
{

  User.findOne({email:req.body.email},(err,user)=>
  {
    if(err)throw {"ERROR":"User Not Found"}
     if(user.password== req.body.password)
    {
      res.send(user)
    }
    else 
      res.send("Wrong Password")
  })

})

router.post("/signup",(req,res)=>
{
    console.log(req.body)
    const user= new User(req.body)
    const t


    user.save()
    res.redirect("/")
})

module.exports= router