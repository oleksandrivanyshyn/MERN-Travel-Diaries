import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() =>
    app.listen(5000, () => console.log('Server is running on port 5000')),
  )
  .catch((err) => console.log(err));
