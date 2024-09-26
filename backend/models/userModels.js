const mongoose = require("mongoose");
//creating Schema
const userSchema=new mongoose.Schema({
name: {
    type : String,
    required: true,
},
email: {
    type : String,
    unique: true,
    required: true,
},

age :{
    type: Number,
},

},

{timestamps:true}

);
//creating models
const user =mongoose.model('user',userSchema);
module.exports=user;

