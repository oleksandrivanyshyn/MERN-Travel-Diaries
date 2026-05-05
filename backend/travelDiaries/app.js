import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routing/user-routes';
import postRouter from './routing/post-routes';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/posts', postRouter);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() =>
    app.listen(5000, () => console.log('Server is running on port 5000')),
  )
  .catch((err) => console.log(err));
