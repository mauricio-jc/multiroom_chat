const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const session = require('express-session');
const moment = require('moment');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public/'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: '451346226436',
  resave: false,
  saveUninitialized: false
}));

app.locals.moment = moment;

consign()
  .include('app/routes')
  // .then('config/database.js')
  .then('app/models')
  .then('app/controllers')
  .into(app);

module.exports = app;