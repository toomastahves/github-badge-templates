'use strict';

var nodestatic = require('node-static');
var file = new nodestatic.Server('./public');
require('./public/app.js');
require('http').createServer(function (request, response) {
  request.addListener('end', function () {
      file.serve(request, response);
    }).resume();
}).listen(1337);
