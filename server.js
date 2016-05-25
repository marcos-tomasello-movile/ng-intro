'use strict';
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/frontend'));
app.use('/public',  express.static(__dirname + '/public')); //used for statics. Images, css, etc

// 1 - Setup
app.get('/setup', function(req, res) {
    res.sendFile(path.join(__dirname + '/frontend/app/1-setup/setup.html'));
});

// 2 - Databinding
app.get('/data', function(req, res) {
    res.sendFile(path.join(__dirname + '/frontend/app/2-databinding/databinding.html'));
});

// 3 - Controllers
app.get('/controllers', function(req, res) {
    res.sendFile(path.join(__dirname + '/frontend/app/3-controllers/controllers.html'));
});

// 4 - Databinding Revisited
app.get('/data2', function(req, res) {
    res.sendFile(path.join(__dirname + '/frontend/app/4-databindingRevisited/databinding.html'));
});

// 5 - Routing
app.get('/routing', function(req, res) {
    res.sendFile(path.join(__dirname + '/frontend/app/5-routing/routing.html'));
});

// 6 - Service
app.get('/service', function(req, res) {
    res.sendFile(path.join(__dirname + '/frontend/app/6-service/service.html'));
});

app.get('/ping', function(req, res) {
    res.status(200).json('pong');
});

//HTTP
app.listen(1111, function(){
    console.log("ready captain. HTTP");
});