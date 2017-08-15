var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/",function(req, res){
    res.render("home");
})

app.get("/friends", function(req, res){
    res.render("friends",{friends : friends});
});

app.post("/addfriend",function (req, res){
    friends.push(req.body.newfriend);
    res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server running on PORT " + process.env.PORT);
});