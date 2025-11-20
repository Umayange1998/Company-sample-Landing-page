const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  image_url: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("News", NewsSchema);
