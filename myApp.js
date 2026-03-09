let express = require('express');
let app = express();

console.log("Hello World");
let abspath=__dirname+"/views/index.html";
app.get("/", function(req, res) {
  res.sendFile(abspath);
});
app.use("/public",express.static(__dirname+"/public"));
module.exports = app;





























 module.exports = app;
