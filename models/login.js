const mongoose=require('mongoose');


const Users=mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const user=mongoose.model('users',Users);

module.exports={user};