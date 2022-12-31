const express = require("express");
const Post = require("../models/postModel");
const {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost,
  updateComments,
} = require("../controllers/postController");

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/", createPost);

router.delete("/:id", deletePost);

router.patch("/:id", updatePost);

router.patch("/:id/comments", updateComments);

module.exports = router;
