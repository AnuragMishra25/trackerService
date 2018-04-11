const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const path = require('path')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./controllers/index'));


// app.get('/', function (req, res) {
//     res.send('Hello World!!!');
// })

app.get('/healthcheck', (req, res, next) => { res.status(200).send('OK'); });

app.listen(3000, function () {
    console.log("Ndde app started on port 3000!!");
});

