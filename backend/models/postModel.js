const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
    },
    comments: [
      {
        comment: {
          type: String,
        },
        commentLikes: {
          type: Number,
        },
        author: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
