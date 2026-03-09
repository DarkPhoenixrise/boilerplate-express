let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", function(req, res) {
  res.send("Hello from the server");
});

module.exports = app;





























 module.exports = app;
