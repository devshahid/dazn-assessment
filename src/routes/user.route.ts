import express from 'express';
import { UserController } from '../controllers/user.controller';

const userRoute = express.Router();

const userController = new UserController();

userRoute.post('/register', userController.register);

userRoute.post('/login', userController.login);

export { userRoute };
