//Importing schema
const Users = require("../models/users");
const session = require("../middleware/session");

//Required modules
const bcrypt = require("bcrypt");

//Function to login a user
const login = async (req, res) => {
  //Requested username and password
  const { uname, psw } = req.body;
  try {
    //Find the user from database
    const user = await Users.findOne({ username: uname });
    if (!user) {
      //If user not found in database
      res.status(400).json({ message: "No user with that username" });
    }
    const isMatch = await bcrypt.compare(psw, user.password); //Check if password matches
    if (!isMatch) {
      //If password doesn't match
      res.status(400).json({ message: "Password incorrect" });
    }
    req.session.user = user; //Store user in session
    res.status(200).redirect("/"); //Redirect to home page
  } catch (err) {
    //If error in server
    res.status(500).json({ message: err.message });
  }
};

//Exporting login function
module.exports = { login };
