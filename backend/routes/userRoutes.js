//import React from 'react'
const express = require ("express");
const { default: mongoose } = require("mongoose");
const dotenv = require ("dotenv");
dotenv.config();
const app =express();
const user =require("../models/userModels");
const router = express.Router();




 //Create
router.post("/",async(req,res)=> {
    const {name,email,age} = req.body;
    const user = require("./models/userModels");
    try{
        const useradded =await user.create({
            name :name,
            email:email,
            age:age,

        });
        res.status(201).json(useradded);

    }
    catch(error){
        console.log("error ");
        
        res.status(400).json({error:error.message})
    }
})


//get 
router.get("/",async (req,res ) =>{
    try{    
    const showAll=await user.find();
    res.status(200).json(showAll);
    }catch (error){
        console.log(error);
        res.send(500).json({error:error.message});
    }
    
    
    res.send("api running...")
});
//get single user

router.get("./", async(req,res)=> {
    const {id} =req.params;
    try{
        const singleUser= await user.findById();
        res.status(200).json(singleUser);

    }catch (error)
    {
        console.log(error);
        res.status(500).json({error:error.message});
    }
});
// delete

module.exports = router;