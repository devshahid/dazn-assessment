import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

jest.mock('../models/movie.model'); // Mock the Movie model

describe('MovieService', () => {
  let movieService: MovieService;

  beforeEach(() => {
    movieService = new MovieService();
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  describe('getAllMoviesService', () => {
    it('should return all movies', async () => {
      const mockMovies = [
        {
          _id: '60d5ec49f1b2c8b1f8c8e1e1',
          title: 'Movie 1',
          genre: 'Comedy',
          rating: 2,
          streamingLink: '',
        },
        {
          _id: '60d5ec49f1b2c8b1f8c8e1e2',
          title: 'Movie 2',
          genre: 'Action',
          rating: 4,
          streamingLink: '',
        },
      ];
      (Movie.find as jest.Mock).mockResolvedValue(mockMovies);

      const result = await movieService.getAllMoviesService();
      expect(result).toEqual(mockMovies);
      expect(Movie.find).toHaveBeenCalledTimes(1);
    });
  });

  //   describe('searchMoviesService', () => {
  //     it('should return movies matching the query', async () => {
  //       const query = 'action';
  //       const mockMovies = [{ title: 'Action Movie' }, { genre: 'Action' }];
  //       (Movie.find as jest.Mock).mockResolvedValue(mockMovies);

  //       const result = await movieService.searchMoviesService(query);
  //       expect(result).toEqual(mockMovies);
  //       expect(Movie.find).toHaveBeenCalledWith({
  //         $or: [
  //           { title: { $regex: query, $options: 'i' } },
  //           { genre: { $regex: query, $options: 'i' } },
  //         ],
  //       });
  //     });
  //   });

  //   describe('createMovieService', () => {
  //     it('should create a new movie', async () => {
  //       const movieData = { title: 'New Movie', genre: 'Drama' };
  //       const userId = new Types.ObjectId();
  //       const mockMovie = { ...movieData, userId };
  //       (Movie.create as jest.Mock).mockResolvedValue(mockMovie);

  //       const result = await movieService.createMovieService(movieData, userId);
  //       expect(result).toEqual(mockMovie);
  //       expect(Movie.create).toHaveBeenCalledWith({ ...movieData, userId });
  //     });
  //   });

  //   describe('updateMovieService', () => {
  //     it('should update an existing movie', async () => {
  //       const id = '60d5ec49f1b2c8b1f8c8e1e1';
  //       const userId = new Types.ObjectId();
  //       const movieData = { title: 'Updated Movie' };
  //       const mockUpdatedMovie = { ...movieData, userId };
  //       (Movie.findOneAndUpdate as jest.Mock).mockResolvedValue(mockUpdatedMovie);

  //       const result = await movieService.updateMovieService(id, movieData, userId);
  //       expect(result).toEqual(mockUpdatedMovie);
  //       expect(Movie.findOneAndUpdate).toHaveBeenCalledWith(
  //         { _id: expect.anything(), userId },
  //         { $set: { title: movieData.title } },
  //         { new: true }
  //       );
  //     });

  //     it('should throw an error if movie not found', async () => {
  //       const id = '60d5ec49f1b2c8b1f8c8e1e1';
  //       const userId = new Types.ObjectId();
  //       const movieData = { title: 'Updated Movie' };
  //       (Movie.findOneAndUpdate as jest.Mock).mockResolvedValue(null);

  //       await expect(movieService.updateMovieService(id, movieData, userId)).rejects.toThrow(CustomError);
  //     });
  //   });

  //   describe('deleteMovieService', () => {
  //     it('should delete an existing movie', async () => {
  //       const id = '60d5ec49f1b2c8b1f8c8e1e1';
  //       const userId = new Types.ObjectId();
  //       const mockDeletedMovie = { title: 'Deleted Movie' };
  //       (Movie.findOneAndDelete as jest.Mock).mockResolvedValue(mockDeletedMovie);

  //       const result = await movieService.deleteMovieService(id, userId);
  //       expect(result).toEqual(mockDeletedMovie);
  //       expect(Movie.findOneAndDelete).toHave beenCalledWith({
  //         _id: expect.anything(),
  //         userId,
  //       });
  //     });

  //     it('should throw an error if movie not found', async () => {
  //       const id = '60d5ec49f1b2c8b1f8c8e1e1';
  //       const userId = new Types.ObjectId();
  //       (Movie.findOneAndDelete as jest.Mock).mockResolvedValue(null);

  //       await expect(movieService.deleteMovieService(id, userId)).rejects.toThrow(CustomError);
  //     });
  //   });
});
