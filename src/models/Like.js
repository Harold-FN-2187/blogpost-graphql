const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
  post: {
    type: mongoose.ObjectId,
    ref: "BlogPost",
  },

  users: {
    type: mongoose.ObjectId,
    ref: "User",
  },
});

const Like = mongoose.model("Like", LikeSchema);

module.exports = Like;
