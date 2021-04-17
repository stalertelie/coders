//verify tokken middleware
require('dotenv').config();
//config
var config=require('./../../../config/appConfig');
var jwt=require('jsonwebtoken');

exports.verifyTokken=(req,res,next)=>{
    try {
        var inputToken=req.headers.authorization.split(' ')[1];;
        const decodetoken=jwt.verify(inputToken,config.TOKKEN_SECRET);
        console.log(decodetoken);
        if(decodetoken.token=='Blackmanba&é(-)è_çà)=@$$$$$$?????:!!!'){
            console.log("autorisation ok");
            next();
        }else{
            res.status(401).json({
                error: 'Invalid request!',
            });
        }

    } catch (error) {
        res.status(401).json({
            error: 'Invalid request!'
        });
    }
   
}