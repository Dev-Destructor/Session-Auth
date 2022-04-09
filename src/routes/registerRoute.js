//importing functions from the controller
const { postUser } = require('../controllers/registerController');

//required modules
const express = require('express');
const router = express.Router();

//Register route
router.post('/register', postUser);

//Exporting router
module.exports = router;