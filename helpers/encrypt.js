const bcrypt=require('bcrypt');

async function encrypt(password){
    
const hash=await bcrypt.hash(password,10);

return hash;

};


async function Check(password,hash){
  const check =await bcrypt.compare(password,hash);
 
  if(check){
      return 1;
  }

  return 0;
}


module.exports={
    encrypt,
  Check
}