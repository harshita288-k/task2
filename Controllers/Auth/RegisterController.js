const TaskModel = require("../../model/Register");
const bcrypt = require("bcrypt");

const RegisterController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

  
    const existingUser = await TaskModel.find({ email });

    // if (existingUser.length > 0) {
    //   // A user with the same email already exists
    //   return res.status(409).send({
    //     success: false,
    //     message: "User with this email already exists",
    //     existingUser
    //   });
    // }


    const hashPassword = await bcrypt.hash(password, 10);

    const registerData = new TaskModel({
      username,
      email,
      password: hashPassword,
    });

    await registerData.save();

    res.status(200).send({
      success: true,
      message: "Successfully registered",
      registerData
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error
    });
  }
};

module.exports = RegisterController;
