import { Request, Response } from 'express';
import ResponseHandler from '../helpers/responseHandler';
import { MovieService } from '../services/movie.service';
import asyncHandler from '../helpers/asyncHandler';
import { CustomRequest } from '../middlewares/auth/authHandler';

class MovieController extends ResponseHandler {
  getAllMovies = asyncHandler(async (req: Request, res: Response) => {
    const movieService = new MovieService();
    const movies = await movieService.getAllMoviesService();
    await this.sendResponse(movies, res);
  });

  searchMovies = asyncHandler(async (req: Request, res: Response) => {
    const { q } = req.query;
    const movieService = new MovieService();
    const movies = await movieService.searchMoviesService(q as string);
    await this.sendResponse(movies, res);
  });

  createMovie = asyncHandler(async (req: CustomRequest, res: Response) => {
    const { title, genre, rating, streamingLink } = req.body;
    const movieService = new MovieService();
    const createdMovie = await movieService.createMovieService(
      {
        title,
        genre,
        rating,
        streamingLink,
      },
      req.user?._id
    );
    await this.sendResponse(createdMovie, res);
  });

  updateMovie = asyncHandler(async (req: CustomRequest, res: Response) => {
    const { id } = req.params;
    const { title, genre, rating, streamingLink } = req.body;
    const movieService = new MovieService();
    const movies = await movieService.updateMovieService(
      id,
      {
        title,
        genre,
        rating,
        streamingLink,
      },
      req.user?._id
    );
    await this.sendResponse(movies, res);
  });

  deleteMovie = asyncHandler(async (req: CustomRequest, res: Response) => {
    const { id } = req.params;
    const movieService = new MovieService();
    const movies = await movieService.deleteMovieService(id, req.user?._id);
    await this.sendResponse(movies, res);
  });
}

export { MovieController };
