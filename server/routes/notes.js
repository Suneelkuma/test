const express=require('express');

const router=express.Router();
const Notes=require("../models/notesSchema")
const fetchUser=require('../middleware/authenticate')
router.get('/notes',(req,res)=>{
    res.send("ok")
})

router.post('/notes',fetchUser,async(req,res)=>{
    try {
const {Title,Description,Tag,work}=req.body

       const notes=await Notes.create({
        Title,Description,Tag,work,user:req.userID
       })
       res.status(200).json({
        status:"Succees",
        notes
       })
    } catch (error) {
        res.status(400).json({
            status:"Failed",
            message:error.message
           })
    }
})

module.exports=router;