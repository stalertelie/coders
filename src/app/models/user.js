//user schema
const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const {v4 : uuidv4} = require('uuid');



const userSchema=new Schema({
    userID:{type:String,unique:true},
    name:{type:String,required:true},
    phone:{type:String,required:true,unique:true},
    date:{type:String},
    isonline:{type:String},
    });

module.exports=mongoose.model('user',userSchema);    



