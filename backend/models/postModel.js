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
    comments: [
      {
        comment: {
          type: String,
        },
        likes: {
          type: Number,
        },
        author: {
          type: String,
        },
      },
    ],
    likes: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
