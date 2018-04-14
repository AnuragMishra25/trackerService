const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const path = require('path')
const app = express();
var port = process.env.PORT || 8080;
// var port =3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRF-Token, X-XSRF-Token, username');
    next();
  });

app.use('/', require('./controllers/index'));


// app.get('/', function (req, res) {
//     res.send('Hello World!!!');
// })

app.get('/healthcheck', (req, res, next) => { res.status(200).send('OK'); });

app.listen(port, function () {
    console.log("Ndde app started on port !!" + port);
});

