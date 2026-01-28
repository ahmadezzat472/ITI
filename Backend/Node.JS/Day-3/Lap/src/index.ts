import express from "express";
import usersRoutes from "./routes/users.routes";

const app = express();

// Application level middleware
app.use(express.json()); // parse request body buffer to json and assign to req.body

app.use("/api/v1/users", usersRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
