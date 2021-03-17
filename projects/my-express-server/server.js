const express = require("express");
const app = express();

app.get("/",function(req,res){
	res.send("<h1>hello world</h1>");
});

app.get("/contact",function(req,res){
	res.send("Contact me at Puneet goel");
});

app.get("/about",function(req,res){
	res.send("I am a noob competitive programmer");
});

app.listen(3000,function(){
	console.log("server started");
});