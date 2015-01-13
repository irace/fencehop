var express = require('express')
  , app     = express()
  , gph     = require('./gph.js');

app.use(express.static('public'));

app.get('/price', function (request, response) {
  gph(function (error, price) {
    if (error) {
      console.log(error);
    }

    response.send({
      price: price
    });
  });
});

app.get('/', function (request, response) {
  response.render('index.html');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on port " + port);
});
