const express=require('express');

const {getAge,addComment,addAge}=require('../controller/age/age.js');

const router=express.Router();


router.post('/getallage',getAge);

router.post('/addcomment',addComment)

router.post('/addage',addAge)

module.exports=router