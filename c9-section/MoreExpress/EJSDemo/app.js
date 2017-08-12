var express = require("express");
var app = express();

app.get("/",function(req, res){
   res.send("works"); 
});




app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("Server running on PORT " + process.env.PORT);
});

