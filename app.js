const express = require('express');
const app = express();

let rutasMain = require('./routes/main.js');

app.use(express.static('public'));
// const publicPath = path.resolve(__dirname);
// app.use(express.static(publicPath));

app.listen(3001, ()=> {
    console.log('Servidor funkeando...'); });


app.use('/', rutasMain);