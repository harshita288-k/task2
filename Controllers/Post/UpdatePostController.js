const PostModel = require("../../model/Post");
const fs = require("fs"); // Import the 'fs' module to work with file operations.

const UpdatePostController = async (req, res) => {
  try {
    const { location, caption } = req.fields;
    const { photo } = req.files;

    const updatepost = await PostModel.findByIdAndUpdate(
      req.params.id,
      { location, caption }, // Update the location and caption.
      { new: true }
    );

    if (!updatepost) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    // Check if a new photo has been uploaded and update the post's photo data and content type.
    if (photo) {
      updatepost.photo.data = fs.readFileSync(photo.path);
      updatepost.photo.contentType = photo.type;
      await updatepost.save(); // Save the updated post with the new photo.
    }

    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      post: updatepost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = UpdatePostController;
