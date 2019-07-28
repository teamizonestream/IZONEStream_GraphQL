import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true
  }
});

export default mongoose.model("Video", videoSchema, "Video");
