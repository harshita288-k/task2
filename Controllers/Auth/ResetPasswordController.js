const TaskModel = require("../../model/Register");
const bcrypt = require("bcrypt");

const ResetPasswordController = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    const existingUser = await TaskModel.findOne({ email });

    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    console.log("old password",existingUser.password)
    console.log("new password text",newPassword)

    const newHashPassword = await bcrypt.hash(newPassword, 10);
    console.log("hash new password",newHashPassword)

  
    const updatedUser = await TaskModel.findByIdAndUpdate(
      existingUser._id,
      { password: newHashPassword },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(500).send({
        success: false,
        message: "Password update failed",
      });
    }

    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
      updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = ResetPasswordController;
