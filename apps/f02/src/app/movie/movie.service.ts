import { Injectable } from '@nestjs/common';

export type Movie = any;

@Injectable()
export class MovieService {
  private readonly movies: Movie[];

  //Static Movies
  constructor() {
    this.movies = [
      {
        id: '00c8ade3-b1e2-4362-86da-80d841fea5be',
        category_id: 1,
        title: 'Breaking Good',
        duration: 125,
        director: 1,
        producer: 1,
        release: Date(),
        synopsis: 'A chemistry teacher, Walter Black, try to make meth',
        createdAt: Date(),
        updatedAt: Date()
      },
      {
        id: '192533a2-f84d-44ac-9332-ab408552f66a',
        category_id: 2,
        title: 'Fiction Pulpeuse',
        duration: 136,
        director: 2,
        producer: 2,
        release: Date(),
        synopsis: 'PAN PAN PAN PAN',
        createdAt: Date(),
        updatedAt: Date()
      }
    ];
  }

  // Retrieve User By Id
  async getMovieById(id: string): Promise<Movie | undefined> {
    return this.movies.find(Movie => Movie.id === id);
  }

  // Retrieve All Users
  async getAllMovies(): Promise<Movie[] | undefined> {
    return this.movies;
  }

  // Retrieve Movie Release Date
  async getMovieReleaseDate(id: string): Promise<Date | undefined> {
    return this.movies.find(movie => movie.id === id).release;
  }

  // Retrieve Movie Type
  async getMovieDuration(id: string): Promise<number | undefined> {
    return this.movies.find(movie => movie.id === id).duration;
  }

  // Retrieve Movie Category
  async getMovieCategory(id: string): Promise<string | undefined> {
    return this.movies.find(movie => movie.id === id).category_id;
  }

  // Add Movie
  async addMovie(movie: Movie): Promise<Movie | undefined> {
    this.movies.push(movie);
    return movie;
  }

  // Update Movie By Id
  async updateMovieById(id: string, movie: Movie): Promise<Movie | undefined> {
    let index = this.movies.indexOf(this.movies.find(movie => movie.id === id));
    this.movies[index] = movie;
    return movie;
  }

  // Delete Movie By Id
  async deleteMovieById(id: string): Promise<string | undefined> {
    let index = this.movies.indexOf(this.movies.find(movie => movie.id === id));
    this.movies.splice(index, 1);
    return 'Movie Deleted';
  }

}
