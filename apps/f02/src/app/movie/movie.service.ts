import { Injectable } from '@nestjs/common';
import { MovieEntity } from '../../../../../libs/dto/src/lib/d02/movie.entity';

@Injectable()
export class MovieService {
  private readonly movies: MovieEntity[] = [
    {
      id: '1',
      category_id: '2',
      title: 'Jurassic Park',
      duration: 127,
      director: 1,
      producer: 1,
      release: new Date(),
      synopsis: 'Le Parc jurassique',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      category_id: '1',
      title: 'Fiction Pulpeuse',
      duration: 136,
      director: 2,
      producer: 2,
      release: new Date(),
      synopsis: 'PAN PAN PAN PAN',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  // Retrieve Movie By Id
  getMovieById(id: string): MovieEntity {
    return this.movies.find(movie => movie.id === id);
  }

  // Retrieve All Movies
  getAllMovies(): MovieEntity[] {
    return this.movies;
  }

  // Create Movie
  createMovie(movie: MovieEntity): MovieEntity {
    movie.id = `${this.movies.length + 1}`;
    this.movies.push(movie);
    return movie;
  }

  // Update Movie By Id
  updateMovieById(id: string, movie: MovieEntity): MovieEntity {
    let index = this.movies.indexOf(this.movies.find(movie => movie.id === id));
    this.movies[index] = movie;
    return movie;
  }

  // Delete Movie By Id
  deleteMovieById(id: string): string {
    let index = this.movies.indexOf(this.movies.find(movie => movie.id === id));
    this.movies.splice(index, 1);
    return 'movie deleted';
  }
}
