var express = require('express')
var path = require('path')

var app = express(); // the main app


app.use('', express.static(path.join(__dirname, '../static-media')))


const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`RESTful API listening on port ${PORT}`);
});



