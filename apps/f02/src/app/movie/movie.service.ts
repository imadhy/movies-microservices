import { Injectable } from '@nestjs/common';
import { Movie } from '../interfaces';

@Injectable()
export class MovieService {
  private readonly movies: Movie[] = [
    {
      id: '1',
      category: 1,
      title: 'Breaking Good',
      duration: 125,
      director: 1,
      producer: 1,
      release: new Date(),
      synopsis: 'A chemistry teacher, Walter Black, try to make meth',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      category: 2,
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
  getMovieById(id: string): Movie {
    return this.movies.find(movie => movie.id === id);
  }

  // Retrieve All Movies
  getAllMovies(): Movie[] {
    return this.movies;
  }

  // Create Movie
  createMovie(movie: Movie): Movie {
    movie.id = `${this.movies.length + 1}`;
    this.movies.push(movie);
    return movie;
  }

  // Update Movie By Id
  updateMovieById(id: string, movie: Movie): Movie {
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
