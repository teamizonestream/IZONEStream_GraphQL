import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  file_path: {
    type: String,
    required: true
  },
  resolution: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

export default mongoose.model("Photo", photoSchema, "Photo");
