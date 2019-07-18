import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  file_name: {
    type: String,
    required: true
  },
  resolution: {
    type: String,
    required: true
  },
  extension: {
    type: String,
    required: true
  },
  length: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

export default mongoose.model("Video", videoSchema, "Video");
