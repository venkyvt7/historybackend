const express=require('express');

const router=express.Router();
const dinoInfo=require('../controller/dinoinfo.js/dino.js');

router.get('/dinoinfo',dinoInfo);


module.exports=router


