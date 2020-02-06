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
      type:
      {
          type:String,
          required:true,
          trim:true
      } ,
      tokens:[
         {
             token:{
                 type:String ,
                 required:true
             }
         }
      ]
},
{
    timestamps:true
})

const User= mongoose.model("User",userSchema);
module.exports= User;