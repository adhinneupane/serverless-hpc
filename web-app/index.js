
const http = require('http');
const buffer = require('buffer')
const fs = require('fs')
var bodyParser = require("body-parser");
const shell = require('shelljs')

var express = require('express')
var app = express()
const path = require('path');

const { resolveNaptr } = require('dns');
const { type } = require('os');
app.use(express.static(path.join(__dirname, '/static/')))

app.get('/home', function (req, res) {
    res.sendFile('/Users/admin/project-defense/serverless-hpc/web-app/static/home.html')
})

var router = express.Router(mergeparams=true)

//not sure what "extended: false" is for
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/aws-execute', function(req,res){
      console.log(req.body)
      const concurrency = ((req.body).concurrency)
      shell.exec('./run-sequential.sh')
      res.status(200)
})

//not sure what "extended: false" is for
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/aws-execute-single', function(req,res){
      console.log(req.body)
      const concurrency = ((req.body).numberoffunctions)
      shell.exec('./run-single.sh')
      res.status(200)
})

//not sure what "extended: false" is for
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/execute-openwhisk', function(req,res){
      console.log(req.body)
      const funcPlatform = ((req.body).numberofImages)
      shell.exec('./execute-openwhisk.sh')
      res.sendFile('/Users/admin/project-defense/serverless-hpc/web-app/response.html')
})

app.get('/pi-experiment', function (req, res) {
  res.sendFile('/Users/admin/project-defense/serverless-hpc/web-app/static/pi-experiment.html')
})

app.get('/machine-learning', function (req, res) {
  res.sendFile('/Users/admin/project-defense/serverless-hpc/web-app/static/machine-learning.html')
})

app.get('/machine-learning-serverless', function (req, res) {
  res.sendFile('/Users/admin/project-defense/serverless-hpc/web-app/static/machine-learning-serverless.html')
})

app.get('/machine-learning-standalone', function (req, res) {
  res.sendFile('/Users/admin/project-defense/serverless-hpc/web-app/static/machine-learning-standalone.html')
})

app.get('/data-processing', function(req,res){
    res.sendFile('/Users/admin/project-defense/serverless-hpc/web-app/static/data-processing.html')
})

app.get('/web-apps', function(req,res){
    res.sendFile('/Users/admin/project-defense/serverless-hpc/web-app/static/web-apps.html')
})

app.listen(3000);