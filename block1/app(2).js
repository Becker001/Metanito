const http = require("http");
http.createServer(function(request,response){

    response.end("hello Node JS");

}).listen(3000,"127.0.0.1",function(){
    console.log("Сервер начал прослушивание на порту 3000")
})