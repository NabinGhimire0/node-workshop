import { Router } from "express";
import { blog, deleteBlog, updateBlog } from "../controller/blogController.js";
import { getBlog } from "../controller/blogController.js";
import { getBlogById } from "../controller/blogController.js";

const blogRoutes = Router();
blogRoutes.post("/create-blog", blog);
blogRoutes.put("/update-blog:id", updateBlog);
blogRoutes.get("/get-blog", getBlog);
blogRoutes.get("/get-blog/:id", getBlogById);
blogRoutes.delete("/get-blog/:id", deleteBlog);
export default blogRoutes;
