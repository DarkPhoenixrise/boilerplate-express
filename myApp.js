require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

let abspath = __dirname + "/views/index.html";

app.use(function(req,res,next){
    let string=req.method+" "+req.path+" - "+req.ip;
    res.send({
        "string": string
    });
    next();
});
app.get("/now",function(req,res,next){
    req.time=new Date().toString();
    next();
},
function(req,res){
    res.send({
        "time":req.time
    });
}
);
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