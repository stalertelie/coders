//user model
const user=require('./../../models/user');


// user create validator

exports.userValidator=(req,res,next)=>{
  
  if(!req.body.name){
   return res.status(403).json('value name must not be empty');
  }

  if(!req.body.phone){
    return res.status(403).json('value phone must not be empty');

  }

  next();
}

exports.userValidator2=(req,res,next)=>{
  if(!req.body.userID){
    return res.status(403).json('value userID must not be empty');
   }
  
  if(!req.body.name){
   return res.status(403).json('value name must not be empty');
  }

  if(!req.body.phone){
    return res.status(403).json('value phone must not be empty');

  }
  

  next();
}
