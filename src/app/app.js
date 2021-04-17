const express = require('express'); //express import
const cors=require('cors'); //cors middleware import
//var morgan =require('morgan');// morgan for logger
const bodyParser=require("body-parser"); // body parser middleware import
const appConfig=require('./../config/appConfig'); //app config
const routes=require('./http/route/router');
const dbconnect=require('./http/middleware/dbConnect');
const app = express(); 

//cors for all application
app.use(cors());
//body parser
app.use(bodyParser());

// set host
app.set('host',appConfig.HOST);
// set port
app.set('port',appConfig.PORT);
//set environnement
app.set('env',appConfig.NODE_ENV);
//set logger
app.use(dbconnect);
//set app route
app.use(routes);









app.use((req,res)=>{
   console.log("server started at "+app.get('host')+":"+app.get('port')+" on " +app.get('env') +" mode");
});

module.exports=app;
