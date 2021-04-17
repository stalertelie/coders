var http=require('http');
var app=require('./src/app/app');

var server=http.createServer(app);
//ok
server.listen(process.env.PORT || 3000);