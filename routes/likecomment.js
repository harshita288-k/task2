var express = require('express');
const LikeCommentController = require('../Controllers/LikeComment/LikeCommentController');


const router = express.Router();

router.post("/like-comment",LikeCommentController)


module.exports = router