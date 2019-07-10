//inporting node framework
var express = require('express');

var app  = express();

//Respond with "hello world" for request that hit our root "/"
app.get('/',(req,res) => {
    res.send('hello world');
});

//listen to the port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;