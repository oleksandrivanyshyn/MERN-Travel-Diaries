import { Router } from 'express';
import { addPost, getAllPosts } from '../controllers/post-controller';
const postRouter = Router();

postRouter.get('/', getAllPosts);
postRouter.post('/', addPost);
export default postRouter;
