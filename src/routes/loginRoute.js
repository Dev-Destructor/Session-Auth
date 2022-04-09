//Importing controller functions
const { login } = require("../controllers/loginController");

//Required modules
const express = require("express");
const router = express.Router();

//Login route
router.post("/login", login);

//Exporting router
module.exports = router;
