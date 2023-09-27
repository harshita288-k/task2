const TaskModel = require("../../model/Register");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

const LoginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate by username
    const existingUser = await TaskModel.findOne({ username });

    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Compare passwords
    const isPasswordMatched = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordMatched) {
      return res.status(401).send({
        success: false,
        message: "Incorrect password",
      });
    }

    const expiresIn = 3 * 24 * 60 * 60;

    var Generatetoken = jwt.sign({ _id:existingUser._id }, process.env.SECRET_KEY, {
      expiresIn: expiresIn,
    });
    // Password matched and username too, send success response
    res.status(200).send({
      success: true,
      message: "Successfully logged in",
      existingUser,
      Generatetoken
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = LoginController;
