const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
	res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
	const apiKey = "###############################";
	var state = req.body.state;
	var units = "metric";

	const url = "https://api.openweathermap.org/data/2.5/weather?q="+state+"&appid="+apiKey+"&units="+units;
	https.get(url,function(response){
		response.on("data",function(data){
			const Data = JSON.parse(data);
			const x = Data.main.temp;
			const icon= "http://openweathermap.org/img/wn/" + Data.weather[0].icon + "@2x.png" ;
			res.write("<h1>"+state+" temperature is " + x + "degree C</h1>");
			res.write("<img src=" + icon +">");
			res.send();
		});
	});
});

app.listen(3000,function(){
	console.log("Server is running at port 3000");
});
