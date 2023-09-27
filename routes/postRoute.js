var express = require('express');
const CreatePostController = require('../Controllers/Post/CreatePostController');
const GetSinglePostController = require('../Controllers/Post/GetSinglePostController');
const GetPost = require('../Controllers/Post/GetPost');
const UpdatePostController = require('../Controllers/Post/UpdatePostController');
const DeletePostController = require('../Controllers/Post/DeletePostController');
const formidableMiddleware = require('express-formidable');
const GetSinglePhotoController = require('../Controllers/Post/GetSinglePhoto');

const router = express.Router();

router.post("/create-post",formidableMiddleware(),CreatePostController)
router.get("/get-single-post/:id",GetSinglePostController)
router.get("/get-post",GetPost)
router.put("/update-post/:id",formidableMiddleware(),UpdatePostController)
router.delete("/delete-post/:id",DeletePostController)
router.get("/get-single-photo/:id",GetSinglePhotoController)

module.exports = router