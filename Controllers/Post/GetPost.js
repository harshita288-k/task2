const PostModel = require("../../model/Post");

const GetPost = async (req, res) => {
  try {

    const getPost = await PostModel.find({}).select("-photo"); 

    if (!getPost) {
      return res.status(404).send({
        success: false,
        message: "Post not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Post retrieved successfully",
      getPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error: error.message, // Provide the error message for debugging
    });
  }
};

module.exports = GetPost;
