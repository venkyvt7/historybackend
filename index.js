const express=require('express');

const cors=require('cors');

const app=express();
const LoginSign=require('./routes/login.js')

app.get('/',(req,res)=>{
    res.send("2332 ");
})


app.listen(8000);