const express = require('express');
const app = express();
app.set('view engine', 'ejs');

let rutasMain = require('./routes/main.js');

app.use(express.static('./public'));
//Le permite a express saber cual es la carpeta de archivos publicos

// const publicPath = path.resolve(__dirname);
// app.use(express.static(publicPath));

app.listen(3001, ()=> {
    console.log('Servidor funkeando...'); });


app.use('/', rutasMain);