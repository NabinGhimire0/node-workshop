import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is required !!!"],
  },
});

export default mongoose.model("tag", tagSchema);
