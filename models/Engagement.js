import mongoose from "mongoose";

const engagementSchema = new mongoose.Schema({
  total: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Engagement", engagementSchema);