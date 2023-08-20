import { Router } from "express";
import authRoutes from "./authRoutes.js";
import blogRoutes from "./blogRoute.js";
import tagRouter from "./tagRoute.js";
const routes = Router();

routes.use(authRoutes);
routes.use(blogRoutes);
routes.use(tagRouter);
export default routes;
