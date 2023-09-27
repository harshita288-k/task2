const PostModel = require("../../model/Post");

const DeletePostController = async (req, res) => {
  try {
    const Deletepost = await PostModel.findByIdAndDelete(req.params.id).select("-photo");
    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      Deletepost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = DeletePostController;
