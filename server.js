

const express = require('express');
const app = express();
const path = require('path');


const homeRouter = require('./routes/database.routes');

//const pomocRouter = require('./routes/pomoc.routes');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));
app.use('/', homeRouter);
//app.use('/',pomocRouter);


app.listen(3000);
