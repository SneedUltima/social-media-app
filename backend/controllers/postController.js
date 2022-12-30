const Post = require("../models/postModel");
const mongoose = require("mongoose");

const createPost = async (req, res) => {
  const { text, author, likes } = req.body;

  if (!text || !author) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }

  try {
    const createdPost = await Post.create({ text, author, likes });
    res.status(200).json(createdPost);
  } catch (error) {
    res.status(400).json({ error: error.Post });
  }
};

const getPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });

  res.status(200).json(posts);
};

const getPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post" });
  }

  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).json({ error: "No such post" });
  }

  res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post" });
  }

  const post = await Post.findOneAndDelete({ _id: id });

  if (!post) {
    return res.status(404).json({ error: "No such post" });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post" });
  }

  const post = await Post.findOneAndUpdate(
    { _id: id },
    {
      $inc: { likes: 1 },
    }
  );

  if (!post) {
    return res.status(404).json({ error: "No such post" });
  }

  res.status(200).json(post);
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost,
};
