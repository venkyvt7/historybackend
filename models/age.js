const monoose=require('mongoose');


const age=monoose.Schema({
name:String,
 title:String,
cardSubtitle1:String,
cardDetailedText1:String,
media1: String,
  comments:[
         { name:String,
           comments:String
        }
      ]

})

const Age=monoose.model("age",age);
module.exports=Age;