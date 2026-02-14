const express = require('express');
const { getPosts, addPost, deletePost, updatePost } = require('../controllers/post.controller');
const { protect } = require('../middleware/auth.middleware');
const upload = require('../config/multer');

const postRouter = express.Router();


postRouter.get("/", getPosts);
postRouter.post("/", protect, upload.array('postImg', 4), addPost);
postRouter.delete('/:id', protect, deletePost);
postRouter.put('/:id', protect, upload.array('postImg', 4), updatePost);

module.exports = postRouter
