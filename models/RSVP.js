import mongoose from "mongoose";

const countSchema = new mongoose.Schema({
  total: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Count", countSchema);