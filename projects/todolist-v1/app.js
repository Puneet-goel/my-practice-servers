const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items=["Food","Study","Bath"];
var listItems=[];

app.get("/",function(req,res){
	var d = new Date();

	// printing day
	// var n = d.getDay();
	// switch(n)
	// {
	// 	case 0:
	// 	  n = "Sunday";
	// 	  break;
	// 	case 1:
	// 	  n = "Monday";
	// 	  break;
	// 	case 2:
	// 	  n = "Tuesday";
	// 	  break;  
	// 	case 3:
	// 	  n = "Wednesday";
	// 	  break;
	// 	case 4:
	// 	  n = "Thursday";
	// 	  break;
	// 	case 5:
	// 	  n = "Friday";
	// 	  break;
	// 	case 6:
	// 	  n = "Saturday";
	// 	  break;    
	// 	default : 
	// 	 console.log("Erroor, current day doesn't exist " + n);  
	// }

	// printing date
	var options={
		weekday : "long",
		day : "numeric",
		month : "long"
	};

	var n = d.toLocaleDateString("en-US",options);

	res.render("list",{listTitle:n, newListItems:items});
});

app.get("/work",function(req,res){
	res.render("list",{listTitle:"Work", newListItems:listItems})
});

app.get("/about",function(req,res){
	res.render("about");
});

app.post("/",function(req,res){

	if(req.body.button=="Work")
	{
		listItems.push(req.body.newItem);
		res.redirect("/work");
	}
	else
	{
		items.push(req.body.newItem);
		res.redirect("/");
	}
});
app.listen(3000,function(req,res){
	console.log("server is running at port 3000");
});