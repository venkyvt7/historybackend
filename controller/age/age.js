
const Age=require('../../models/age.js');
async function getAge(req,res){

const {age}=req.body;
    const data= await Age.find({name:age});

     res.send({data});
}

async function addAge(req,res){
  try{
const newAge={
 
  name:req.body.name,
  title:req.body.title,
  cardTitle1:req.body.cardTitle1,
  cardSubtitle1:
  req.body.cardSubtitle1,
  cardDetailedText1:req.body.cardDetailedText1,
  media1:req.body.media1
, comments:[]

}
const age1= await Age.create({
  
  name:req.body.name,
  title:req.body.title,
  cardTitle1:req.body.cardTitle1,
  cardSubtitle1:
  req.body.cardSubtitle1,
  cardDetailedText1:req.body.cardDetailedText1,
  media1:req.body.media1
, comments:[]

});
 
await age1.save();

res.send(age1);
  }

  catch(e){
    res.send({message:" ERROR "})
  }
}
async function addComment(req,res){
  
    try
    {
      
    const {_id,name,comment}=req.body;
// console.log(_id,name,comment);
    const data = await Age.findOne({_id:_id});
     
    data.comments.push({
        name:name,
        comment:comment
    })
 
    await data.save();

    res.json({message:"Comment Added Succesfully"});
    }

    catch(e){
      console.log(e);

        res.send({message:" ERROR "});
    }
}
module.exports={getAge,addComment,addAge}