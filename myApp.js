require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

let abspath = __dirname + "/views/index.html";

app.use(function(req,rest,next){
    let string=req.method+" "+req.path+" - "+req.ip;
    console.log(string);
    next();
});
app.get("/", function(req, res) {
  res.sendFile(abspath);
});
app.get("/json", function(req,res){
    if (process.env.MESSAGE_STYLE==="uppercase"){
        res.json({
        "message": "HELLO JSON"
    });
    }else{
        res.json({
        "message": "Hello json"
    });
    }
});


// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

module.exports = app;