import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Title is required !!!"],
  },
  description: {
    type: String,
    require: [true, "Description is required!!!"],
  },
  image: {
    type: String,
  },
  author: {
    type: String,
    require: [true, "Author is required"],
  },
  tag: [
    {
      type: mongoose.Types.ObjectId,
      ref: "tags",
    },
  ],
});

export default mongoose.model("blog", blogSchema);
