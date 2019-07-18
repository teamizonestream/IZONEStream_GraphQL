import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  schedule: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  month: {
    type: Number,
    required: true
  },
  day: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Schedule", scheduleSchema, "Schedule");
