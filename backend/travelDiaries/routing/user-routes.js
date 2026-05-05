import { Router } from 'express';
import {
  getAllUsers,
  signUp,
  login,
  getUserById,
} from '../controllers/user-controllers';
const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post('/signup', signUp);
userRouter.post('/login', login);
userRouter.get('/:id', getUserById);
export default userRouter;
