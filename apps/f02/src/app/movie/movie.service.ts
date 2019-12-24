import { Injectable } from '@nestjs/common';
import { MovieEntity } from '../../../../../libs/dto/src/lib/d02/movie.entity';
import { MovieService as MService } from 'apps/d02/src/app/movie/movie.service';

@Injectable()
export class MovieService {
  private readonly movieService: MService;

  // Retrieve Movie By Id
  getMovieById(id: string) {
    return this.movieService.show(id);
  }

  // Retrieve All Movies
  getAllMovies() {
    return this.movieService.showAll();
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
