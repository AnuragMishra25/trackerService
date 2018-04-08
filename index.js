const express = require('express');
const bodyParser = require('body-parser');

const path = require('path')

const app = express();

app.get('/', function(req, res){
    res.send('Hello World!!!');
})

app.listen(3000, function(){
    console.log("Ndde app started on port 3000!!")
});

