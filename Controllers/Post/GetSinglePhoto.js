const PostModel = require("../../model/Post");

const GetSinglePhotoController = async (req, res) => {
  try {
    const { id } = req.params;

    const getPost = await PostModel.findById(id).select("photo"); // Use findById(id)

    if (getPost.photo.data) {
      res.set("content-type",getPost.photo.contentType)
      return res.status(200).send(getPost.photo.data);
    }

  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error: error.message, // Provide the error message for debugging
    });
  }
};

module.exports = GetSinglePhotoController;
