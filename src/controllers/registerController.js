//Importing schema
const Users = require("../models/users");

//Required modules
const bcrypt = require("bcrypt");

//Function to register a user
const postUser = async (req, res) => {
  const { username, password, confirmPassword, email, firstName, lastName } =
    req.body; //Requested details
  try {
    const hashedPassword = await bcrypt.hash(password, 10); //Hash the password
    const user = new Users({
      //Create a new user
      username,
      password: hashedPassword,
      email,
      firstName,
      lastName,
    });
    const savedUser = await user.save(); //Save the user
    res.status(400).json("User created"); //Send response
  } catch (err) {
    //If error in server
    res.status(500).json({ message: err.message });
  }
};

//Exporting postUser function
module.exports = { postUser };
