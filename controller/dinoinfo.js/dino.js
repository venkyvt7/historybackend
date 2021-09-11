
const {img}=require('./scrapping/img')
const {name}=require('./scrapping/name');
const {text}=require('./scrapping/text');
async function dinoInfo(req,res){
 
const data=[]
for(let i=0;i<Math.min(img.length,Math.min(name.length,text.length)  ); i++)
{

    const newObj={
      name:name[i],
      text:text[i],
      img:img[i]
    }

    data.push(newObj);
}
    res.send({data:data});

}

module.exports=dinoInfo;