var express = require("express");
var app = express();

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Serving starting up on PORT " + process.env.PORT);
});

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal",function(req, res){
    var animal = req.params.animal;
    var sound;
    if (animal === "pig"){
        sound = "Oink";
    }else if(animal === "cow"){
        sound = "Moo";
    }else if(animal === "dog"){
        sound = "Woof Woof!";
    }else{
        sound = "sound";
    }
    res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:string/:num",function(req, res) {
    var num = parseInt(req.params.num);
    var print = "";
    for(var i = 0; i < num; i++){
        print += (req.params.string + " ");
    }
    res.send(print);
});

app.get("*",function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});








