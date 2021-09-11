const express=require('express');
const { SendWhatsapp } = require('../controller/twillio/twillio');


const router=express.Router();


router.post('/sendfact',SendWhatsapp);


module.exports=router;