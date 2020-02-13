const mongoose= require("mongoose")

const userSchema = new mongoose.Schema({
      name:{
          type:String,
          required:true,
          trim:true
      },
      age:
      {
          type:Number,
          required:true,
          trim:true,
          default:0,
          validate(value)
          {
              if(value<18)
              {
                  throw new Error("Age Must Be above 18");
              }
          }

      },
      email:
      {
       type:String,
        required:true,
       unique:true,
       trim:true,
       lowercase:true
      },
      password:
      {
        type:String,
        required:true,
        trim:true,
        minlengtth: 7
      },
      tokens:[
         {
             token:{
                 type:String ,
                 required:true
             }
         }
      ],
      address:
      {
        type:String,
        required:true,
        trim:true 
      },
      state:
      {
        type:String,
        required:true,
        trim:true
      },
      country:
      {
        type:String,
        required:true,
        trim:true
      },
      phone :
      {
        type:Number,
        required:true,
        trim:true
      }
},
{
    timestamps:true
})


userSchema.methods.generateToken=async function()
{
  const user= this

}



const User= mongoose.model("User",userSchema);
module.exports= User;