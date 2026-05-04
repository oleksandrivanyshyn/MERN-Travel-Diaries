import { Router } from 'express';
import { getAllUsers, signUp, login } from '../controllers/user-controllers';
const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post('/signup', signUp);
userRouter.post('/login', login);
export default userRouter;
