var express = require("express");
var app = express();

var path = require("path");
var options = {
  root: path.join(__dirname, "/"),
};

var http = require("http");

var nStatic = require("node-static");

// setting static middleware
app.use(express.static("public"));

// serves all the request which includes /images
app.use("/images", express.static(__dirname +"/Images"));

// setting virtual path
app.use("/resources", express.static(__dirname + "/Images"));

// define a route
app.get("/", function (req, res) {
  res.sendFile("index.html", options);
});
app.get("/about",function(req,res){


       res.sendFile("about.html",options);
 
    
   })

   app.get("/weather",function(req,res){


    res.sendFile("weather.html",options);

 
})


app.get("*",function(req,res){


  res.sendFile("404error.html",options);


})


var server = app.listen(4000, function () {
  console.log(" 4000  expess web application is running!");
});