//Required modules
const mongoose = require("mongoose");
const Joi = require("joi");
const Joigoose = require("joigoose")(mongoose);

//Schema
const joiSchema = Joi.object().keys({
  username: Joi.string().min(6).max(30).required(),
  password: Joi.string().required(),
  email: Joi.string().email().trim().lowercase().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

//Converting joi schema to mongoose schema
const userSchema = new mongoose.Schema(Joigoose.convert(joiSchema));

//Exporting schema
module.exports = mongoose.model("Users", userSchema);
