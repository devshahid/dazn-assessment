import express from 'express';
import { MovieController } from '../controllers/movie.controller';
import authHandler from '../middlewares/auth/authHandler';

const movieRoute = express.Router();

const movieController = new MovieController();

movieRoute.get('/', movieController.getAllMovies);

movieRoute.get('/search', movieController.searchMovies);

movieRoute.post('/', authHandler.adminAccess, movieController.createMovie);

movieRoute.put('/:id', authHandler.adminAccess, movieController.updateMovie);

movieRoute.delete('/:id', authHandler.adminAccess, movieController.deleteMovie);

export { movieRoute };
