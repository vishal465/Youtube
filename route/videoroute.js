const express = require ("express");
const videoRouter =express.Router();
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/youtube').then(()=>{console.log("DB connected");})
const a=[];
videoRouter.get('/video',(req,res)=>{
    res.send("Hello from Router");
});
videoRouter.get('/video',(req,res)=>{
    res.send(a);
});

videoRouter.post('/video',(req,res)=>{
    a.push[1];
    res.send(a);
});
videoRouter.delete('/video',(req,res)=>{
    res.send(a);
});






module.exports=videoRouter;