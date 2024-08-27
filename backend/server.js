const express = require ("express");
const { default: mongoose } = require("mongoose");
const dotenv = require ("dotenv");
dotenv.config();
const app =express();
const user =require("./models/userModels");
const userRoutes = require("./routes/userRoutes");





mongoose.connect(process.env.URI)
.then(() => {
    console.log("connected succes....");
    app.listen(process.env.PORT,(err)=>{
        if(err) console.log(err);
        console.log("running at ..",process.env.PORT)
    });
})
.catch((error) =>{
    console.log("error",error)
});
 app.use(userRoutes);


