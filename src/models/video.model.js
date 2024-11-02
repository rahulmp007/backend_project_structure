const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const videoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
