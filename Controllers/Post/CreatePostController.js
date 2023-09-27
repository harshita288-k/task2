const PostModel = require("../../model/Post");
const fs = require("fs");

const CreatePostController = async (req, res) => {
  try {
    const { location, caption } = req.fields;
    const { photo } = req.files;

    // Validate photo size (less than 1MB)
    const maxSizeInBytes = 1024 * 1024; // 1MB = 1024KB and 1KB = 1024bytes so, 1024KB = 1024*1024 BYTES
    if (photo.size > maxSizeInBytes) {
      return res.status(400).json({ message: "Photo size exceeds 1MB limit" });
    }

    const post = new PostModel({ ...req.fields });
    if(photo){
      post.photo.data= fs.readFileSync(photo.path)
      post.photo.contentType= photo.type
    }

    await post.save();

    res.status(200).send({
      success: true,
      message: "Post created Successfully",
      post,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

module.exports = CreatePostController;
