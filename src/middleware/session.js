//Emvironment variables
require("dotenv").config({ path: "../env/.env" });
const { SESSION_SECRET } = process.env;

//required modules
const session = require("express-session");

//Function to set session
const Session = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
});

//Exporting Session
module.exports = { Session };
