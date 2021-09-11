const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require("dotenv").config();
const app=express();
const LoginSign=require('./routes/login.js')
app.use(express.json());
app.use(LoginSign);
app.use(cors());
app.get('/',(req,res)=>{
    res.send("2332 ");
})

const PORT=8000||process.env.PORT

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  })
  .then(() =>{ console.log("Connected to database...");
  app.listen(PORT);
  
}
  )
  .catch();