const LikeCommentModel = require("../../model/LikeComment");


const LikeCommentController = async (req, res) => {
  try {
    const {comment,likes} = req.body;

    const post = new LikeCommentModel({
        comment,likes
    });

    await post.save();

    res.status(200).send({
      success: true,
      message: "Like and comment added Successfully",
      post
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error
    });
  }
};

module.exports = LikeCommentController;
