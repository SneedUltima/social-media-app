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
    id: {
      type: String,
    },
    selectedFile: {
      type: String,
      required: true,
    },
    comments: [
      {
        comment: {
          type: String,
        },
        commentDate: {
          type: Date,
          default: Date.now,
        },
        author: {
          type: String,
        },
        file: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
