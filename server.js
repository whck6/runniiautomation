var express = require("express");
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

//  Get the environment variables we need.
var ipaddr  = process.env.OPENSHIFT_DIY_IP ||'127.0.0.1';
var port    = process.env.OPENSHIFT_DIY_PORT || 8080;

app.listen(port, ipaddr, function () {
  console.log('Example app listening on port 8000!')
})

// Console will print the message
console.log('Server running at http://127.0.0.1:8000/');
