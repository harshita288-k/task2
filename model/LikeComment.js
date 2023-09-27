const mongoose = require("mongoose");

const LikeCommentSchema = new mongoose.Schema({
    likes: {
      type: Boolean,
    },
    comment: {
      type: String,
    },
});

const LikeCommentModel = mongoose.model("LikeCommentModel", LikeCommentSchema);

module.exports = LikeCommentModel;
