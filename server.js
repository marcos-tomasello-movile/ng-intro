'use strict';
const express = require('express');
const path = require('path');

const app = express();

app.use('/public',  express.static(__dirname + '/frontend/static')); //used for statics. Images, css, etc

app.get('/setup', function(req, res) {
    res.sendFile(path.join(__dirname + '/frontend/app/1-setup/setup.html'));
});

app.get('/data', function(req, res) {
    res.sendFile(path.join(__dirname + '/frontend/app/2-databinding/databinding.html'));
});

app.get('/ping', function(req, res) {
    res.status(200).json('pong');
});

//HTTP
app.listen(1111, function(){
    console.log("ready captain. HTTP");
});