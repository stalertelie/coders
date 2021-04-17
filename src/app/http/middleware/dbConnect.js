var mongoose=require('mongoose');

var connect=(req,res,next)=>{
   mongoose.connect(
       'YOUR_CONNECTION_STRING',
        { useNewUrlParser: true,
           useUnifiedTopology: true ,
           useFindAndModify: false,
           useCreateIndex: true 
        }
       
   ).then(()=>{
       console.log("connexion à mongoDB reussie!");
   }).catch(()=>{
    console.log("connexion à mongoDB  echouée!");
   });
   next();
}

module.exports=connect;
