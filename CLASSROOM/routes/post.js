const express=require("express");
const router=express.Router();


//Index
router.get("/",(req,res)=>{
    res.send("GET for posts");
});

//show 
router.get("/:id",(req,res)=>{
    res.send("GET for show posts");
});
//post
router.post("/",(req,res)=>{
    res.send("POST for posts");
});

//post -users
router.delete("/:id",(req,res)=>{
    res.send("DELETE for posts");
});

module.exports=router;