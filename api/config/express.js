import express from "express";
import routes from "../routes/routes.js";
import errorHandler from "../middleware/errorHandlingMiddleWare.js";
const app = express();
// express build-in middleware
app.use(express.urlencoded({ extended: false })); // to handle form data
app.use(express.json()); // to handle json data

// custom middleware
app.use(routes); // router middleware

app.use(errorHandler);

app.all("*", (req, res) => {
  res
    .status(404)
    .json({
      message: `The requested route ${req.url} doesnot exist in the ${req.method} method`,
    });
});

export default app;
