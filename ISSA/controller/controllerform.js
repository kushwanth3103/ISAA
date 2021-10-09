const express = require('express');
const router = express.Router();
const obj_form = require("../models/uploadform");
const path = require('path');
var mongoose = require('mongoose');

router.use(express.urlencoded({ extended: true }))


const postform = async (req,res)=>{
    const details=new obj_form({name:req.body.name ,club:req.body.club});
    try{
        await details.save( function(err,docum)
        {
             id= docum._id;
             id=""+id
             console.log(id)
        });
    }
    catch(error)
    {
        res.status(500).send(error);
    }
}



module.exports={postform};
