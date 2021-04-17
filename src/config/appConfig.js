require('dotenv').config();


module.exports={
    NODE_ENV:process.env.NODE_ENV || 'development',
    HOST:process.env.HOST || 'localhost',
    PORT:process.env.PORT || '3000',
    TOKKEN_SECRET:'FUTURhokage@13.'
};