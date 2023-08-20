import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://username:password@cluster0.8benjja.mongodb.net/?retryWrites=true&w=majority";
const connectTomongodb = () => {
  try {
    mongoose.connect(connectionString);
    console.log("waiting DB connection");
  } catch (err) {
    throw err;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!!");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected Successfully!!");
});
export default connectTomongodb;
