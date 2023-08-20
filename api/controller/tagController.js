import mongoose from "mongoose";
import { customError } from "../middleware/costomErrorHandler.js";
import errorHandler from "../middleware/errorHandlingMiddleWare.js";
import tagModel from "../model/tagModel.js";

export const createTag = async (req, res, next) => {
    const {name} = req.body;
    if(!name){
        return next(customError(400, "Name is required !!"));
    }
    try{
        const newTag = new tagModel({
            name: name,
        })
        const newTagCreated = await newTag.save();
        res.status(201).json({message: "Tag created successfully", tag: newTagCreated});
    }catch(error){
        next(errorHandler(error));
    }
}