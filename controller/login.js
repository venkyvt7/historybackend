

 async function login(req,res){
 const {email,password}=req.body;

  res.send({});

}

async function register(req,res){

 const{name,email,password}=req.body;


 res.send({});

}

module.exports={
login,
register

}