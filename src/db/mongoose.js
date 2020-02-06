let mongoose = require("mongoose");
const url="mongodb://localhost/Insurance_App"

mongoose.connect(url , {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true,
  useFindAndModify:false
})

module.exports =mongoose;