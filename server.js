'use strict';
const express = require('express');
const path = require('path');

const app = express();

app.use('/public',  express.static(__dirname + '/frontend/static')); //used for statics. Images, css, etc

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/frontend/app/1-hello/hello.html'));
});

app.get('/ping', function(req, res) {
    res.status(200).json('pong');
});

//HTTP
app.listen(1111, function(){
    console.log("ready captain. HTTP");
});