const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  photo: {
   data:Buffer,
   contentType:String
  },
  location: {
    type: String,
  },
  caption: {
    type: String,
  },
  likes: {
    type: Boolean,
  },
  comment: {
    type: String,
  },
});

const PostModel = mongoose.model("PostModel", PostSchema);

module.exports = PostModel;
