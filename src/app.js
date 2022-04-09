//required modules
const express = require('express');
const app = express();

//Importing database
const db = require('./config/db');

//Importing session
const { Session } = require('./middleware/session');

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(Session);

//Routes
app.use('/api/users', require('./routes/registerRoute'));
app.use('/api/users', require('./routes/loginRoute'));

//export the app
module.exports = app;