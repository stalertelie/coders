
require('dotenv').config();
var jwt=require('jsonwebtoken');
const {v4 : uuidv4} = require('uuid');

//config
var config=require('./../../config/appConfig');
//model imports
var userModel=require('./../models/userModel');
var user=require('./../models/user');


exports.testController=(req,res,next)=>{
    res.status(200).json({
     app_state:"ready"
    });

}

exports.userController=(req,res,next)=>{
 return res.status(200).json(userModel.userModel);

}

//tokken generator
exports.generateToken=(req,res)=>{
    var token=jwt.sign({token:'Blackmanba&é(-)è_çà)=@$$$$$$?????:!!!'},config.TOKKEN_SECRET,{expiresIn:'24h'});
    console.log(token);
    return res.status(201).json({
       'token':token 
    });

}

//users controller
/*
create user
*/
exports.createUser=(req,res)=>{

  var data=req.body;
  var name=req.body.name;
  var phone=req.body.phone;
  //on vérifie si l'ulitisateur n'existe pas déjà
  user.findOne({phone:phone})
        .then(data=>{
           if(!data){
            const User=new user({
              userID:uuidv4(),
              name:name,
              phone:phone,
              date:Date.now().toString()
            });
            //création de l'utilisateur
            User.save()
                .then(user=>{
                     delete user.__v;
                     delete user._id;
                    res.status(201).json({
                     reponse_code:200,
                     data:user 
                    });
                })
                .catch(error=>{
                    res.status(500).json({
                      reponse_code:500,
                      data:error 
                    });
                });

           }else{
            res.status(404).json('utilisateur existe déjà');
           }
        })

  
}

//login controller
exports.userLogin=(req,res)=>{
  user.findOne({phone:req.body.phone,name:req.body.name})
      .then(data=>{
             if(data){
               //login success
                delete data.__v;
                delete data._id;
               var reponse={
                reponse_code:200,
                data:data
               };
                user.updateOne(
                  {phone:req.body.phone},
                  {$set:{isonline:'true',date:Date.now().toString()}},
                  {upsert:false})
                    .then(d=>{
                      //console.log(d);
                      return res.json(reponse);
                    })
                    .catch(error=>{
                      //console.log(error);
                      return res.json(reponse);
                    })
             }else{
               // utilisateur non trouvé
               var reponse={
                reponse_code:404,
                data:data
               };
               return res.json(reponse);
             }
      });
}

exports.userLogout=(req,res)=>{
  user.updateOne(
    {userID:req.body.userID},
    {$set:{isonline:'false',date:Date.now().toString()}},
    {upsert:false}
  ).then(d=>{
    var data={
      reponse_code:201,
      data:"utilisateur déconnecté"
    }
     return res.json(data);
  })
  .catch(error=>{
    return res.json({
      reponse_code:500,
      data:error
    });
  });
}

exports.userUpdate=(req,res)=>{
  user.updateOne(
    {userID:req.body.userID},
    {$set:{name:req.body.name,phone:req.body.phone,isonline:'true',date:Date.now().toString()}},
    {upsert:false}
  ).then(d=>{
    var data={
      reponse_code:201,
      data:"utilisateur modifié"
    }
     return res.json(data);
  })
  .catch(error=>{
    return res.json({
      reponse_code:500,
      data:error
    });
  })
  ;

}

/*
*********************** Transaction management controllers ***********************************
*/

//MTN
exports.transactionTest=(req,res)=>{
  return  res.json(req.body);
}

exports.mtnCallBack=(req,res)=>{
  console.log("MTN CALL BACK"+req.body);
  return  res.json("ok");
}
//FUTURhokage@13.