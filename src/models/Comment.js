const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  replies: {
    type: mongoose.ObjectId,
    ref: "Reply",
  },
});
