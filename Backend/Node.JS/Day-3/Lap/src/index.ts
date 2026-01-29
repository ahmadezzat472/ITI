import express from "express";
import usersRoutes from "./routes/users.routes";
import mongoose from "mongoose";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app = express();

// Application level middleware
app.use(express.json()); // parse request body buffer to json and assign to req.body

app.use("/api/v1/users", usersRoutes);

app.use(errorHandler); // error handler middleware => 1 only in the server => catch all errors

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
  mongoose
    .connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
    .then(() => {
      console.log("✅ Connected to MongoDB");
    })
    .catch((err) => {
      console.log("❌ Connected to MongoDB");
      console.log(err);
    });
});
