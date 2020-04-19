const express = require('express');
const app = express();
const db = require('./db');
const _port = 5500;
const path = require('path');
/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})*/
app.use(express.static(path.join(__dirname, 'dist')));

db.createTable();
app.listen(_port,(err) => {
    if(err) { throw err;}
    console.log(`server running on ${_port}`);
})