
const User=require('../models/login.js');
const {encrypt,Check}=require('../helpers/encrypt');

const {loginToken}=require('../helpers/jwt');






async function login(req,res){
 const {email,password}=req.body;

 try {
  if(!email||!password)
 {
   res.send({message:"Invalid Types"});
 }
 
 else{
 
 
   const find=await User.findOne({email:email});
  console.log(find);
   if(find)
 {
 
  // const hashPassword=await encrypt(password);
 const check=await Check(password,find.password);
   
 if(check==1)
 {
    const token=await loginToken(email);
  res.send({Token:token});
 }
 else{
  res.send({message:"Wrong Email or password"});
 }
   }
 
   else{
     res.send({message:"Wrong Email or password"});
   }
 }
 }
 
 catch(e){
 console.log(e);
   res.send({Error:"There is Err"})
 }
}

async function register(req,res){

 const{name,email,password}=req.body;

console.log(req.body)

try {
 if(!name||!email||!password)
{
  res.send({message:"Invalid Types"});
}

else{


  const find=await User.find({email:email});
 
  if(find.length==0)
{

 const hashPassword=await encrypt(password);

   const user=await User.create({
     name,email,password:hashPassword
   })


   await user.save();
   const token=await loginToken(email);
 res.send({Token:token});
  }

  else{
    res.send({message:"Email already present"});
  }
}
}

catch(e){
console.log(e);
  res.send({Error:"There is Err"})
}
}

module.exports={
login,
register

}