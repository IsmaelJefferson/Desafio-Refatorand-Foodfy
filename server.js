const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.set("view engine" , "html");

server.get("/" , function(req ,res ){
    return res.send("eh nois")
})




server.listen(5000 , function(){
    console.log("server is runnimg")
})