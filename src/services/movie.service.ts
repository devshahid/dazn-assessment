import { Types } from 'mongoose';
import { CustomError } from '../core/ApiError';
import IMovie, { Movie } from '../models/movie.model';
import { common } from '../utils/common';

class MovieService {
  async getAllMoviesService(): Promise<IMovie[]> {
    return await Movie.find();
  }

  async searchMoviesService(query: string): Promise<IMovie[]> {
    return await Movie.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { genre: { $regex: query, $options: 'i' } },
      ],
    });
  }

  async createMovieService(movieData: Partial<IMovie>, userId?: Types.ObjectId): Promise<IMovie> {
    return await Movie.create({ ...movieData, userId });
  }

  async updateMovieService(id: string, movieData: Partial<IMovie>, userId?: Types.ObjectId) {
    const updateBody = {
      ...(movieData.title && { title: movieData.title }),
      ...(movieData.genre && { genre: movieData.genre }),
      ...(movieData.rating && { rating: movieData.rating }),
      ...(movieData.streamingLink && { streamingLink: movieData.streamingLink }),
    };

    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: common.convertToObjectId(id), userId },
      { $set: updateBody },
      { new: true }
    );
    if (!updatedMovie) throw new CustomError('Something went wrong while updating the movie');

    return updatedMovie;
  }

  async deleteMovieService(id: string, userId?: Types.ObjectId) {
    const deletedMovie = await Movie.findOneAndDelete({
      _id: common.convertToObjectId(id),
      userId,
    });
    if (!deletedMovie) throw new CustomError('Something went wrong while deleting the movie');
    return deletedMovie;
  }
}

export { MovieService };
