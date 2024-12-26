import express from 'express';
import { userRoute } from './user.route';
import { movieRoute } from './movie.route';
const router = express.Router();

router.use('/user', userRoute);

router.use('/movies', movieRoute);

export default router;
