const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
	res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator",function(req,res){
	res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator",function(req,res){
	var h = parseFloat(req.body.height);
	var w = parseFloat(req.body.weight);
	var result = w/(h*h);
	res.send("Your BMI is" + result);
})

app.post("/",function(req,res){
	var n1 = Number(req.body.Num1);
	var n2 = Number(req.body.Num2);
	var result = n1+n2;
	res.send("thank you!" + result);
})

app.listen(3000,function(){
	console.log("Server Running ......");
});