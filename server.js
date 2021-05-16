'use strict';

const express = require('express');
const app = express();

const errorHandler = require('./error-handlers/500.js');
const notFoundHandler = require('./error-handlers/404.js');
app.get('/', home);
app.get('/bad', badReq);

function home(req,res){
  res.send('welcome to server.js');
}

function badReq(req, res) {
  throw new Error('Something went wrong !!!!!');
}


app.use('*', notFoundHandler);
app.use(errorHandler);

function start (PORT){
  app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`);
  });  

}

module.exports={
  app:app,
  start:start,
};