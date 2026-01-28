import express from 'express';
import usersRoutes from './routes/users.routes';
import mongoose from 'mongoose';

const app = express();

// Application level middleware
app.use(express.json()); // parse request body buffer to json and assign to req.body

// routes
app.use("/api/v1/users", usersRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  mongoose.connect('mongodb://localhost:27017/iti-ism').then(() => {
    console.log('✅✅ Connected to MongoDB');
  }).catch((err) => {
    console.log('❌❌ Connected to MongoDB');
    console.log(err);
  });
});