//Environment variables
require("dotenv").config({ path: "../env/.env" });
const { DB_NAME, DB_HOST, DB_PORT } = process.env;

//Required modules
const mongoose = require("mongoose");

//Connect to the database
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  useNewUrlParser: true,
});
const db = mongoose.connection;

//Check for connection errors
db.once("open", () => {
  console.log("Connected to Database");
});
db.on("error", (err) => {
  console.log(err);
});

//Export the database
module.exports = db;
