var path = require('path');
var express = require('express');
var app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'someTests', 'www')));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`)
})