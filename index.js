const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const path = require('path')
const app = express();
// const mysql = require('mysql2')

// const sequelize = new Sequelize('attribution', 'username', 'password', {
//     host: 'attributiondbinstance.cr3khkirkklm.us-east-2.rds.amazonaws.com',
//     port: 3306,
//     logging: console.log,
//     maxConcurrentQueries: 100,
//     dialect: 'mysql',
//     pool: { maxConnections: 5, maxIdleTime: 30 },
//     language: 'en'
// })
app.use('/', require('./controllers/index'));

// app.get('/', function (req, res) {
//     res.send('Hello World!!!');
// })

app.get('/healthcheck', (req, res, next) => { res.status(200).send('OK'); });

app.listen(3000, function () {
    console.log("Ndde app started on port 3000!!");
    // sequelize.authenticate()
    //     .then(() => {
    //         console.log('Connection has been established successfully.');
    //     })
    //     .catch(err => {
    //         console.error('Unable to connect to the database:', err);
    //     });
});

