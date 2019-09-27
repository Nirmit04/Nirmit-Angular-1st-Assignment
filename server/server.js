var express = require('express');
var request = require('request');

// Create an expres-node server
var app = express();
var url = "https://jsonplaceholder.typicode.com/todos"
const cors = require('cors');
app.use(cors());

app.get('/users',  function(req, res, next) {
    request({
        url: url,
        json: true
    }, function (error, response, body) {
    
         if (!error && response.statusCode === 200) {
            res.send(body);
        }
    });
});

app.listen(8000, () => console.log('Express Server Now Running On localhost:8000'));