import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  file_path: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

export default mongoose.model("Video", videoSchema, "Video");
