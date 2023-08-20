import mongoose from "mongoose";
import { customError } from "../middleware/costomErrorHandler.js";
import errorHandler from "../middleware/errorHandlingMiddleWare.js";
import blogModel from "../model/blogModel.js";

export const blog = async (req, res, next) => {
  const { title, description, image, author, tag } = req.body;
  if(!title || !description || !author){
    return next(customError(400, "All fields are required"));
  }
  try {
    const newBlog = new blogModel({
      title: title,
      description: description,
      image: image,
      author: author,
      tag:tag,
    });
    await newBlog.save();
    res.status(201).json({ message: "Blog added successfully" });
  } catch (error) {
    return next(errorHandler(error));
  }
};

// code to get all the data from blog model

export const getBlog = async (req, res, next) => {
  try {
    const blogs = await blogModel.find({});
    res.status(200).json(blogs);
  } catch (error) {
    return next(errorHandler(error));
  }
};

// update blog by id

export const updateBlog = async (req, res, next) => {
  const {id} = req.params;
  const {title, description, image, author} = req.body;
  try{
    const blog = await blogModel.findById(id).populate("tag");
    if (!blog) return next(customError(404, "Blog not found"));
    if(title){
      blog.title=title;
    }
    if(description){
      blog.description=description;
    }
    if(image){
      blog.image=image;
    }
    if(author){
      blog.author=author;
    }
    await blog.save();
    res.status(200).json(blog);
  }catch(error){
    next(errorHandler(error));
  }
};

// get blog by id

export const getBlogById = async (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    return next(customError(404, "Not a valid Id"));
  }
  try {
    const blog = await blogModel.findById(req.params.id);
    if (blog) {
      res.status(200).json(blog);
    } else {
      return next(customError(404, "Blog not found"));
    }
  } catch (error) {
    return next(errorHandler(error));
  }
};

// delete blog by id

export const deleteBlog = async (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    return next(customError(404, "Not a valid Id"));
  }
  try {
    const blog = await blogModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Blog Successfully deleted");
  } catch (error) {
    return next(errorHandler(error));
  }
};
